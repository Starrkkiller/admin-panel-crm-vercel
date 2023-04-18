import React from "react";
import "./App.css";
import styles from "./App.module.css";
import { Input } from "./elements/Input/Input";
import { Button } from "./elements/Button/Button";
import { OrdersList } from "./features/OrdersList/Table/OrdersList";
import { Provider } from "react-redux";
import store from "./features/index";

export const statusNames = {
  new: "Новый",
  calculating: "Рассчет",
  confirm: "Подтвержден",
  postponed: "Отложен",
  done: "Выполнен",
  canceled: "Отменен",
};

function App() {
  const users = [
    {
      dataLogin: "user1",
      dataPassword: "123",
    },
    {
      dataLogin: "user2",
      dataPassword: "1234",
    },
    {
      dataLogin: "user3",
      dataPassword: "12345",
    },
    {
      dataLogin: "user4",
      dataPassword: "123456",
    },
  ];
  const [type, setType] = React.useState("password");
  const changeInputType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const [isSuccessfulLogin, setSuccessfulLogin] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const logInCheck = () => {
    users.map(({ dataLogin, dataPassword }) => {
      if (login === dataLogin && password === dataPassword) {
        return setSuccessfulLogin(true);
      }
    });
  };
  const handleResetLogin = () => setLogin("");
  const handleResetPassword = () => setPassword("");

  const handleSetLoginChange = ({ target: { value } }) => setLogin(value);
  const handleSetPasswordChange = ({ target: { value } }) => setPassword(value);

  return (
    <>
      {!isSuccessfulLogin ? (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.logo}>LOGO</p>
            <p className={styles.greeting}>
              Welcome To CRM System
              <br />
              Sign In To Your Account
            </p>
            <Input
              label="Login"
              className={styles.input}
              value={login}
              placeholder="user1"
              onChange={handleSetLoginChange}
              onReset={handleResetLogin}
            />
            <Input
              label="Password"
              className={styles.input}
              value={password}
              placeholder="123"
              onChange={handleSetPasswordChange}
              onReset={handleResetPassword}
              type={type}
              onEyeClick={changeInputType}
            />
            <Button
              isFullWidth={true}
              className={styles.logInButton}
              onClick={logInCheck}
            >
              Войти
            </Button>
          </div>
        </div>
      ) : (
        <Provider store={store}>
          <OrdersList />
        </Provider>
      )}
    </>
  );
}

export default App;
