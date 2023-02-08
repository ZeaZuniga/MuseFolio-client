import LogInOut from "../../components/LogInOut/LogInOut";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import SongCard from "../../components/SongCard/SongCard";
import axios from "axios";

export default function Homepage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const { data } = await axios.get("http://localhost:8080/favorites");
      setFavorites(data);
    };

    getFavorites();
  }, []);

  if (!favorites[0]) {
    return (
      <div className="homepage">
        <LogInOut />
        <h1 className="homepage__header">Let's start practicing!</h1>
        <h3>Try uploading or favoriting some music to get started.</h3>
      </div>
    );
  } else {
    const favoritesList = favorites.map((song) => {
      return <SongCard key={song.id} id={song.id} title={song.title} />;
    });

    return (
      <div className="homepage">
        <LogInOut />
        <h1 className="homepage__header">Let's start practicing!</h1>
        <section className="favorite-songs">{favoritesList}</section>
      </div>
    );
  }
}
