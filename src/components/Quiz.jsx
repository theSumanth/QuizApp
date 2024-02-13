import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  const handleSkipAnswer = useCallback(() => {
    // setUserAnswers((prevUserAnswers) => [...prevUserAnswers, null]);
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  console.log(userAnswers);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkip={handleSkipAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Quiz;
