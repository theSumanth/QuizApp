import { useState } from "react";

import QuizTimer from "./QuizTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

const Question = ({ index, onSkip, onSelect }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleClickAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let answerState;

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  let timer = 10000;

  if (answer.selectedAnswer != "") timer = 1000;
  if (answer.isCorrect != null) timer = 2000;

  return (
    <div id="question">
      <QuizTimer
        key={timer}
        timeout={timer}
        onSkipAnswer={answer.selectedAnswer === "" ? onSkip : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        onSelectAnswer={handleClickAnswer}
        selectedAnswer={answer.selectedAnswer}
      />
    </div>
  );
};

export default Question;
