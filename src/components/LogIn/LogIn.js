import "./LogIn.css";
import { useState } from "react";
import handleLogIn from "../../functions/handleLogIn";

export default function LogIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <>
      <button
        className="login-button"
        onClick={() => {
          if (isAuthenticated) {
            localStorage.removeItem("accessToken");
            setIsAuthenticated(false);
          } else {
            setIsLoggingIn(true);
          }
        }}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
      <div className={`authorization ${isLoggingIn ? "" : "hidden"}`}>
        <div className="background-shade">
          <form
            className="authorization-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogIn(login, password, setIsAuthenticated);
              setLogin("");
              setPassword("");
            }}
          >
            <label className="authorization-form__title">Authorization</label>
            <input
              name="login"
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            ></input>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button
              className="authorization-form__button"
              type="submit"
              onClick={() => setIsLoggingIn(false)}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
