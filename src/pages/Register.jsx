import React, { useContext, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import GreenButton from "./../components/UI/button/GreenButton";
import { privateRoutes } from "./../router/index";

const Register = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="username"
          placeholder="Введите имя пользователя"
        />
        <MyInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Введите email"
        />
        <MyInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Введите пароль"
        />
        <GreenButton
        // onClick={() => store.registration(username, email, password)}
        >
          Зарегистрироваться
        </GreenButton>

        <GreenButton
        // onClick={() => store.login(username, email, password)}
        >
          Войти
        </GreenButton>
      </form>
    </div>
  );
};

export default Register;
