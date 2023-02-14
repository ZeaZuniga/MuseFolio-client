import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ setUserId }) {
  const logOut = () => {
    setUserId(undefined);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__link">
        <h2 className="navbar__title">MuseFolio</h2>
      </Link>
      <section className="navbar__section">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/search" className="navbar__link">
              Search
            </Link>
          </li>
        </ul>
        <button onClick={logOut} className="button logInOut">
          Log Out
        </button>
      </section>
    </div>
  );
}
