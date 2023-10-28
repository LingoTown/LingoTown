import 'regenerator-runtime';
import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { talking } from '../../api/Talk';
import { talkingType } from '../../type/TalkType';
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { talkStateAtom } from '../../atom/TalkStateAtom';

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

export const STTAndRecord: React.FC = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [stream, setStream] = useState<MediaStream>();
  const [media, setMedia] = useState<MediaRecorder>();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode>();
  const [uploadAudio, setUploadAudio] = useState<string>("");
  listening
  onRec
  uploadAudio
  
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const talkState = useRecoilValue(talkStateAtom);

  useEffect(() => {
    console.log(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const onRecAudio = async () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    const makeSound = (stream: MediaStream) => {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) { track.stop(); });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function () {
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });

    SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
  };

  const offRecAudio = () => {
    if (media && stream) {
      media.ondataavailable = function (e) {
        setOnRec(true);
        const sound = new File([e.data], "soundBlob", {
          lastModified: new Date().getTime(),
          type: "audio",
        });
        const data = new FormData();
        data.append("talkFile", sound);
        data.append("talkId", String(1));
        data.append("prompt", "hi");
        doTalking(data);
      };

      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });

      media.stop();
      if (analyser && source) {
        analyser.disconnect();
        source.disconnect();
      }
      SpeechRecognition.stopListening();
    }
  };

  const resetRecAudio = () => {
    if (media) {
      media.ondataavailable = function () { setOnRec(true); };

      if (stream)
        stream.getAudioTracks().forEach(function (track) { track.stop(); });

      media.stop();
      if (analyser && source) {
        analyser.disconnect();
        source.disconnect();
      }
      resetTranscript();
      SpeechRecognition.stopListening();
    }
  };

  const doTalking = async(param: FormData) => {
    await talking(param, ({data}) => {
      const result = data.data as talkingType;
      setUploadAudio(result.file);
      const copy = {...talkBalloon}
      copy.sentence = result.responseMessage;
      setTalkBalloon(copy);
    }, (error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    console.log("off");
    offRecAudio();
  }, [talkState.offRec])

  useEffect(() => {
    onRecAudio();
    console.log("on")
  }, [talkState.onRec])

  useEffect(() => {
    resetRecAudio();
    console.log("reset")
  }, [talkState.reset])

};