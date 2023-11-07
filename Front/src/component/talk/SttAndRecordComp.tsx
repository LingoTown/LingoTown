import 'regenerator-runtime';
import { useEffect, useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { talking } from '../../api/Talk';
import { talkingType } from '../../type/TalkType';
import { talkBalloonAtom } from "../../atom/TalkBalloonAtom";
import { userAtom } from '../../atom/UserAtom';
import { talkStateAtom } from '../../atom/TalkStateAtom';
import { useRecoilValue, useRecoilState } from "recoil";

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

type STTAndRecordProps = {
  lang: string;
};

export const STTAndRecord: React.FC<STTAndRecordProps> = ({ lang }) => {

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [stream, setStream] = useState<MediaStream | null>();
  const [media, setMedia] = useState<MediaRecorder | null>();
  const [source, setSource] = useState<MediaStreamAudioSourceNode | null>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode | null>();
  const [talkBalloon, setTalkBalloon] = useRecoilState(talkBalloonAtom);
  const talkState = useRecoilValue(talkStateAtom);
  const user = useRecoilValue(userAtom);
  const isMounted = useRef({ offRec: false, onRec: false, reset: false, finish: false, selectTopic: false });
  const flag = useRef<boolean>(true);

  useEffect(() => {
    if (flag.current) {
      setTalkBalloon(prev => ({ ...prev, sentence: transcript }));
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const onRecAudio = async () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);
    setTalkBalloon(prev => ({ ...prev, userImg: user.profileImg}));

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
          mediaRecorder.ondataavailable = function () {};
        }
      };
    });

    SpeechRecognition.startListening({ language: lang, continuous: true });
  };

  const offRecAudio = () => {
    if (media && stream) {
      media.ondataavailable = function (e) {
        const sound = new File([e.data], "soundBlob", { lastModified: new Date().getTime(), type: "audio" });

        const data = new FormData();

        data.append("talkFile", sound);
        data.append("talkId", String(talkState.talkId));
        data.append("prompt", transcript);
        data.append("language", String(localStorage.getItem("Language")));

        doTalking(data);
      };

      stream.getAudioTracks().forEach(function (track) { track.stop() });
      media.stop();
      if (analyser && source) {
        analyser.disconnect();
        source.disconnect();
      }

      resetTranscript();
      SpeechRecognition.stopListening();
      stopMicrophoneAccess();
    }
  };

  const doTalking = async(param: FormData) => {
    setTalkBalloon(prev => ({ ...prev, isLoading:true }));
    flag.current = false;
    await talking(param, ({data}) => {
      const result = data.data as talkingType;
      setTalkBalloon(prev => ({
        ...prev,
        sentence: result.responseMessage,
        prevSectence: result.responseMessage,
        audio: result.responseS3URL,
        isLoading: false,
        isUser: false,
      }));
    }, (error) => {
      console.log(error);
      // setTalkBalloon(prev => ({
      //   ...prev,
      //   sentence: "",
      //   prevSectence: "result.responseMessage",
      //   audio: "",
      //   isLoading: false,
      // }));
    })
    setTalkBalloon(prev => ({...prev, audioPlay: !talkBalloon.audioPlay }))
  }

  const stopMicrophoneAccess = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => track.stop());
      stream.getAudioTracks().forEach(function (track) { track.stop(); });
      setStream(null);
    }
  
    if (media) {
      media.stop();
      setMedia(null);
    }
    
    if (analyser) {
      analyser.disconnect();
      setAnalyser(null);
    }
    
    if (source) {
      source.disconnect();
      setSource(null);
    }

    resetTranscript();
    SpeechRecognition.stopListening();
  };
    
  useEffect(() => {
    if (isMounted.current.onRec) {
      resetTranscript();
      onRecAudio();
      flag.current = true;
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
      stopMicrophoneAccess();
      onRecAudio();
    } else {
      isMounted.current.reset = true;
    }
  }, [talkState.reset]);

  useEffect(() => {
    if (isMounted.current.finish) {
      stopMicrophoneAccess();
    } else {
      isMounted.current.finish = true;
    }
  }, [talkState.finish]);

  useEffect(() => {
    if (isMounted.current.selectTopic) {
      flag.current = false;
    } else {
      isMounted.current.selectTopic = true;
    }
  }, [talkState.selectTopic])

  useEffect(() => {
    return () => {
      stopMicrophoneAccess();
    };
  }, []);

};