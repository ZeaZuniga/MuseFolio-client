import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MusicPage() {
  const [songDetails, setSongDetails] = useState([]);
  const currentSong = useParams().songId;

  useEffect(() => {
    const getSongDetails = async () => {
      const { data } = await axios.get(`http://localhost:8080/${currentSong}`);
      setSongDetails(data[0]);
    };

    getSongDetails();
  }, []);

  if (!songDetails.id) {
    return;
  } else {
    return (
      <div>
        This is the MusicPage for {songDetails.title} by {songDetails.composer}
        !!
      </div>
    );
  }
}
