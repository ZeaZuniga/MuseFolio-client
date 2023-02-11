import { Link } from "react-router-dom";
import LogInOut from "../LogInOut/LogInOut";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <h2 className="navbar__title">MuseFolio</h2>
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
        <LogInOut />
      </section>
    </div>
  );
}
