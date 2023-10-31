export type PromptType = {
  title: string,
  message: string;
  _default: string;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
};