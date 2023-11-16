import { useRecoilState } from 'recoil';
import { quizAtom } from '../atom/QuizAtom';

const quizSuccess = () => {
  const [, setQuiz] = useRecoilState(quizAtom);

  const updateQuizAtom = (quizId: number) => {
    setQuiz(prevQuiz => {
      const newQuizList = prevQuiz.quizList.map(quiz => {
        if (quiz.quizId === quizId) 
          return { ...quiz, solved: true };
        
        return quiz;
      });

      return { ...prevQuiz, quizList: newQuizList };
    });
  };

  return updateQuizAtom;
};

export default quizSuccess;