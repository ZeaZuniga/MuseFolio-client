import "./LoginPage.scss";

export default function LoginPage({ setUserId }) {
  return (
    <div className="login">
      <h1 className="login__header">Log in to view your music.</h1>
      <form className="login__form">
        <label className="form__label" htmlFor="userName">
          *User Name:
          <input type="text" className="form__label--input" />
        </label>
        <label className="form__label" htmlFor="password">
          *Password:
          <input type="password" className="form__label--input" />
        </label>
        <input type="submit" className="button submit" />
      </form>
      <p className="login__disclaimer">
        *Note: Do <b>NOT</b> use actual credentials
      </p>
    </div>
  );
}
