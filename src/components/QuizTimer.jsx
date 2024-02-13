import { useEffect, useState } from "react";

const QuizTimer = ({ timeout, onSkipAnswer, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onSkipAnswer, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onSkipAnswer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <progress
        id="question-time"
        value={remainingTime}
        max={timeout}
        className={mode}
      ></progress>
    </div>
  );
};

export default QuizTimer;
