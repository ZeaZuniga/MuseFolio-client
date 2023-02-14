import "./HomePage.scss";
import { useEffect, useState } from "react";
import SongCard from "../../components/SongCard/SongCard";
import axios from "axios";

export default function Homepage({ userId }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const { data } = await axios.get("http://localhost:8080/favorites", {
        params: {
          user: userId,
        },
      });
      setFavorites(data);
    };

    getFavorites();
  }, []);

  if (!favorites[0]) {
    return (
      <div className="homepage-empty">
        <h1 className="homepage-empty__phrase">Let's start practicing!</h1>
        <h3 className="homepage-empty__suggestion">
          Try uploading or favoriting some music to get started.
        </h3>
      </div>
    );
  } else {
    const favoritesList = favorites.map((song) => {
      return (
        <SongCard
          key={song.id}
          id={song.id}
          title={song.title}
          composer={song.composer}
        />
      );
    });

    return (
      <div className="homepage">
        <section className="homepage__container">
          <h1 className="homepage__phrase">
            What song are we going to practice today?
          </h1>
        </section>
        <hr className="linebreak" />
        <section className="favorite-songs">{favoritesList}</section>
      </div>
    );
  }
}
