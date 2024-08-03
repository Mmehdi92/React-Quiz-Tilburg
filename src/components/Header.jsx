import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="Image of a empty forum / Quiz logo" />
      <h1>Tilburg Knowledge Quiz</h1>
      <p>Made by Mehdi</p>
    </header>
  );
}
