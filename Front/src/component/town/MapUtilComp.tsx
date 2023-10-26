import { useContext } from "react"
import AlertContext from "../util/alert/AlertContext"
import ConfirmContext from "../util/confirm/ConfirmContext"
import PromptContext from "../util/prompt/PromptContext"


export const MapUtilComp = () => {

  const { alert: alertComp } = useContext(AlertContext);
  const { confirm: confirmComp } = useContext(ConfirmContext);
  const { prompt: promptComp } = useContext(PromptContext);

  const onClickAlert = async (title:string, message:string) => {
    const result = await alertComp(title, message);
    console.log('Alert: ', result);
  };

  const onClickConfirm = async(title:string, message:string) => {
    const result = await confirmComp(title, message);
    console.log('Confirm: ', result);
  }

  const onClickPrompt = async(title:string, message:string) => {
    const result = await promptComp(title, message);
    console.log('Prompt: ', result);
  }

  return(
    <>
      <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={() => onClickAlert("LingoTown", "alert")}
        >나가기
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={() => onClickConfirm("토끼", "토끼와 대화를 시작하시겠습니까?")}
        >설정</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          onClick={() => onClickPrompt("닉네임 변경", "변경할 닉네임을 입력해 주세요")}
        >사용법</button>
      </div>
    </>
  )
}