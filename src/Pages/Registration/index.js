import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { authRegistration } from "../../store/reducers/auth";

export const Registration = () => {
  let logins = JSON.parse(localStorage.getItem("logins"));
  if (logins === null) {
    logins = [];
  }

  // const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  const [login, setLogin] = useState("Vasya");
  const [password, setPassword] = useState("12345");

  const handleClick = () => {
    let flag = false;
    logins.forEach((item) => {
      if (item.login === login) {
        item.password = password;
        flag = true;
      }
    });
    if (!flag) {
      logins.push({
        login: login,
        password: password,
      });
    }
    localStorage.setItem("logins", JSON.stringify(logins));

    // dispatch(authRegistration({ login: login, password: password }));
    routeChange();
  };

  return (
    <div className="container-registration">
      <p className="container-registration__item">Страница регистрации</p>
      <input
        type="text"
        placeholder="Login"
        className="container-registration__item"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        className="container-registration__item"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="container-registration__item" onClick={handleClick}>
        Зарегистрироваться
      </button>
    </div>
  );
};
