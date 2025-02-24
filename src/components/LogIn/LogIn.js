import "./LogIn.css";
import { useState } from "react";
import handleLogIn from "../../functions/handleLogIn";

export default function LogIn({ setUser }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <>
      <button className="login-button" onClick={() => setIsLoggingIn(true)}>
        Log In
      </button>
      <div className={`authorization ${isLoggingIn ? "" : "hidden"}`}>
        <div className="background-shade">
          <form
            className="authorization-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogIn(login, password, setUser);
              setLogin("");
              setPassword("");
              setIsLoggingIn(false);
            }}
          >
            <label className="authorization-form__title">Authorization</label>
            <input
              required
              name="login"
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            ></input>
            <input
              required
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button className="authorization-form__button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
