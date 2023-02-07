import LogInOut from "../../components/LogInOut/LogInOut";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import SongCard from "../../components/SongCard/SongCard";

export default function Homepage() {
  // const [favorites, setFavorites] = useState([]);

  // useEffect(()=>{
  //   const getFavorites = async()=>{
  //     const {data} = await axios.get("http://localhost:8080/favorites");
  //     setFavorites(data);
  //   }

  //   getFavorites()
  // }, [])

  return (
    <div className="homepage">
      <LogInOut />
      <h1 className="homepage__header">Let's start practicing!</h1>
      <section className="favorite-songs">
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </section>
    </div>
  );
}
