import quizCompleteImg from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnsweresPercent =
    100 - correctAnswersPercent - skippedAnswersPercent;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Completed icon, a Trophy icon" />
      <h2>QUIZ COMPLETED</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercent}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercent}%</span>
          <span className="text">Correctly answered</span>
        </p>
        <p>
          <span className="number">{wrongAnsweresPercent}%</span>
          <span className="text">Wrongly Answered</span>
        </p>
      </div>

      <ol>
        {QUESTIONS.map((question, index) => {
          let cssClass = "user-answer";

          if (userAnswers[index] === null) cssClass += " skipped";
          else if (userAnswers[index] === QUESTIONS[index].answers[0])
            cssClass += " correct";
          else cssClass += " wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={cssClass}>{userAnswers[index] ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
