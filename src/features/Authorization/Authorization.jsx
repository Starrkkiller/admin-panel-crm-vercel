import React from "react";
import { Input } from "../../elements/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "../../elements/Button/Button";

export const Authorization = (
  logInCheck,
  login,
  password,
  setLogin,
  setPassword
) => {
  const [type, setType] = React.useState("password");

  const handleResetLogin = () => setLogin("");
  const handleResetPassword = () => setPassword("");

  const changeInputType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
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
          onChange={setLogin}
          onReset={handleResetLogin}
        />
        <Input
          label="Password"
          className={styles.input}
          value={password}
          placeholder="123"
          onChange={setPassword}
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
  );
};
