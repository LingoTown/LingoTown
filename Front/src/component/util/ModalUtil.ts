import { useContext } from "react"
import AlertContext from "../util/alert/AlertContext"
import ConfirmContext from "../util/confirm/ConfirmContext"
import PromptContext from "../util/prompt/PromptContext"

export const useCustomAlert = () => {
  const { alert: alertComp } = useContext(AlertContext);
  return async(title: string, message: string) => {
    await alertComp(title, message);
  };
};

export const useCustomConfirm = () => {
  const { confirm: confirmComp } = useContext(ConfirmContext);
  return async(title: string, message: string) => {
    return await confirmComp(title, message);
  };
};

export const useCustomPrompt = () => {
  const { prompt: promptComp } = useContext(PromptContext);
  return async(title: string, message: string) => {
    return await promptComp(title, message);
  };
};
