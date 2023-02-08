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
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
}
