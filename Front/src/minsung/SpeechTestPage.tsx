import { useRecoilValue } from 'recoil';
import { userAtom } from '../atom/UserAtom';
import { useState, ChangeEvent } from 'react';
import { tempTalk } from '../api/Talk';

const SpeechTest = () => {
  
  const user = useRecoilValue(userAtom);
  user

  const [myTalkList, setMyTalkList] = useState<string[]>(["abcd", "asd"]);
  const [aiTalkList, setAiTalkList] = useState<string[]>(["abcd"]);
  const [chat, setChat] = useState<string>("When is the fastest flight to Japan?");
  const [prompt, setPrompt] = useState<string>("You are an employee working at an international airport in the USA, knowledgeable about airport operations and procedures.");

  const handleChat = (event: ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  }

  const handlePrompt = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  }

  const sendMessage = async() => {
    const copy = [...myTalkList, chat]
    const json = {
      prompt: prompt, 
      chat: chat
    }

    await tempTalk(json, ({data}) => {
      const answer = data.choices[0].message.content as string
      const temp = [...aiTalkList, answer]
      setAiTalkList(temp);
    }, (error) => {
      console.log(error)
    });

    setMyTalkList(copy);
    setChat("");
  }

  return(
    <>
      프롬프트 입력란
      <input 
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
        type="text"
        placeholder="텍스트를 입력하세요"
        onChange={handlePrompt}
        value={prompt}
      />
      메시지 입력란
      <input 
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
        type="text"
        placeholder="텍스트를 입력하세요"
        onChange={handleChat}
        value={chat}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => { sendMessage() }}>
        대화 전송
      </button>
      <h1>
        내가한말
      </h1>
      {
        myTalkList.map((value, index) => {
          return (
            <li key={index}>
              {value}
            </li>
          )
        })
      }
      <br/>
      <h1>
        ai답변
      </h1>
      {
        aiTalkList.map((value, index) => {
          return (
            <li key={index}>
              {value}
            </li>
          )
        })
      }
    </>
  )
}


export default SpeechTest;