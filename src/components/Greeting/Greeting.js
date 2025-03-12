import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <>
      <h1>Добро пожаловать!</h1>
      <h2>Нажмите "Далее" чтобы продолжить</h2>
      <Link to="/catalog">Далее</Link>
    </>
  );
}
