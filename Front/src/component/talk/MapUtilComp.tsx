import { useCustomAlert, useCustomConfirm, useCustomPrompt } from "../util/ModalUtil"

export const MapUtilComp = () => {

  const customAlert = useCustomAlert();
  const customConfirm = useCustomConfirm();
  const customPrompt = useCustomPrompt();

  return(
    <>
      <div className="absolute top-0 right-0 z-10 flex flex-col space-y-2 mr-2 mt-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={() => customAlert("LingoTown", "alert")}
        >나가기
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={() => customConfirm("토끼", "토끼와 대화를 시작하시겠습니까?")}
        >설정</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          onClick={() => customPrompt("닉네임 변경", "변경할 닉네임을 입력해 주세요")}
        >사용법</button>
      </div>
    </>
  )
}