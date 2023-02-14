import "./SongCard.scss";
import sheetmusic from "../../assets/images/sheetmusic16.jpg";
import { Link } from "react-router-dom";
import editIcon from "../../assets/images/edit.svg";

export default function SongCard(props) {
  return (
    <div className="favorite-songs">
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
      <Link to={`/${props.id}/edit`} className="favorite-songs__edit">
        <img className="edit-icon" src={editIcon} alt="Edit Icon" />
      </Link>
    </div>
  );
}
