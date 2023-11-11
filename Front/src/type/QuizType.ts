export type QuizType = {
  quizId: string;
  quiz: string;
  koQuiz: string;
  solved: string;
}

export type quizSubmitType = {
  quizId: number;
  result: string;
}

export type quizTypeForAtomList = {
  quizList: {
    quizId: number;
    question: string;
    koreanQuestion: string;
    solved: boolean;
    theme: string;
  }[]
}

export type quizTypeForAtom = {
  quizId: number;
  question: string;
  koreanQuestion: string;
  solved: boolean;
  theme: string;
}