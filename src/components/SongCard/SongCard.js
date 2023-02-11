import "./SongCard.scss";
import sheetmusic from "../../assets/images/sheetmusic16.jpg";
import { Link } from "react-router-dom";

export default function SongCard(props) {
  return (
    <Link to={`/${props.id}`} className="favorite-songs__link">
      <div className="favorite-songs__card">
        <img
          src={sheetmusic}
          alt="sheet music"
          className="favorite-songs__img"
        />
        <section className="favorite-songs__text">
          <h3 className="favorite-songs__text--title">{props.title}</h3>
          <h4 className="favorite-songs__text--composer">
            By {props.composer}
          </h4>
        </section>
      </div>
    </Link>
  );
}
