import { useRef } from "react";

const Answers = ({ answers, answerState, onSelectAnswer, selectedAnswer }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ol id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = "";

        if (isSelected && answerState === "answered") {
          cssClass = "selected";
        } else if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
              disabled={selectedAnswer !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default Answers;
