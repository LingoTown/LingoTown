import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { quizTypeForAtomList } from "../type/QuizType";

const { persistAtom } = recoilPersist({
  key: 'quizAtom',
  storage: localStorage,
});

export const quizAtom = atom<quizTypeForAtomList>({
  key: "quizAtom",
  default: {
    quizList: []
  },
  effects_UNSTABLE: [persistAtom],
});

export const initialQuiz = {
    quizList: []
};
