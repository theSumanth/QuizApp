import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="Quiz icon" />
      <h1>REACT QUIZ</h1>
    </header>
  );
};

export default Header;
