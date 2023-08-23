import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { authLogin } from "../../store/reducers/auth";

export const Login = () => {
  // const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/products`;
    navigate(path);
  };

  const [login, setLogin] = useState("Vasya");
  const [password, setPassword] = useState("12345");

  const handleClick = () => {
    // dispatch(authLogin({ login: login, password: password }));
    routeChange();
  };

  return (
    <div className="container-login">
      <p className="container-login__item">
        Страница для входа Наших Любимых Пользователей!
      </p>
      <input
        type="text"
        placeholder="Login"
        className="container-login__item"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        className="container-login__item"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="container-login__item" onClick={handleClick}>
        Вход
      </button>
    </div>
  );
};
