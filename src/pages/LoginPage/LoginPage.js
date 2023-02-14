import { useState } from "react";
import "./LoginPage.scss";
import axios from "axios";

export default function LoginPage({ setUserId }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const userSubmit = (e) => {
    e.preventDefault();

    const getUser = async () => {
      const { data } = await axios.post("http://localhost:8080/user", {
        username: name,
        password: pass,
      });
      try {
        setUserId(data[0].id);
        setName("");
        setPass("");
      } catch {
        alert("Incorrect credentials, try again.");
        setName("");
        setPass("");
      }
    };

    getUser();
  };

  return (
    <div className="login">
      <h1 className="login__header">Log in to view your music.</h1>
      <form className="login__form" onSubmit={userSubmit}>
        <label className="form__label" htmlFor="userName">
          *User Name:
          <input
            type="text"
            className="form__label--input"
            value={name}
            onChange={nameHandler}
          />
        </label>
        <label className="form__label" htmlFor="password">
          *Password:
          <input
            type="password"
            className="form__label--input"
            value={pass}
            onChange={passHandler}
          />
        </label>
        <input type="submit" className="button submit" />
      </form>
      <p className="login__disclaimer">
        *Note: Do <b>NOT</b> use actual credentials
      </p>
    </div>
  );
}
