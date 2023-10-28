import 'regenerator-runtime';
import { useEffect, useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { talking } from '../../api/Talk';
import { talkingType } from '../../type/TalkType';
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { useRecoilValue, useSetRecoilState } from "recoil";

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

type STTAndRecordProps = {
  lang: string;
  talkId: number;
};

export const STTAndRecord: React.FC<STTAndRecordProps> = ({lang, talkId}) => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [stream, setStream] = useState<MediaStream>();
  const [media, setMedia] = useState<MediaRecorder>();
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode>();
  const setTalkBalloon = useSetRecoilState(talkBalloonAtom);
  const talkState = useRecoilValue(talkStateAtom);
  const isMounted = useRef({ offRec: false, onRec: false, reset: false });

  useEffect(() => {
    setTalkBalloon(prev => ({ ...prev, sentence: transcript }));
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
          };
        }
      };
    });

    SpeechRecognition.startListening({ language: lang, continuous: true });
  };

  const offRecAudio = () => {
    if (media && stream) {
      media.ondataavailable = function (e) {
        const sound = new File([e.data], "soundBlob", {
          lastModified: new Date().getTime(),
          type: "audio",
        });
        const data = new FormData();
        data.append("talkFile", sound);
        data.append("talkId", String(talkId));
        data.append("prompt", transcript);
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

      resetTranscript();
      SpeechRecognition.stopListening();
    }
  };

  const resetRecAudio = () => {
    if (media) {

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
      setTalkBalloon(prev => ({ ...prev, sentence: result.responseMessage }));
      console.log(result)
    }, (error) => {
      console.log(error);
    })
  }
    
  useEffect(() => {
    if (isMounted.current.onRec) {
      onRecAudio();
    } else {
      isMounted.current.onRec = true;
    }
  }, [talkState.onRec]);

  useEffect(() => {
    if (isMounted.current.offRec) {
      offRecAudio();
    } else {
      isMounted.current.offRec = true;
    }
  }, [talkState.offRec]);

  
  useEffect(() => {
    if (isMounted.current.reset) {
      resetRecAudio();
    } else {
      isMounted.current.reset = true;
    }
  }, [talkState.reset]);

};