import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export default function MusicPage() {
  const [songDetails, setSongDetails] = useState([]);
  const currentSong = useParams().songId;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getSongDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/song/${currentSong}`
      );
      setSongDetails(data[0]);
    };

    getSongDetails();
  }, []);

  const onPdfSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (!songDetails.id) {
    return;
  } else {
    console.log(songDetails.url_path);

    return (
      <div>
        <p>
          This is the MusicPage for {songDetails.title} by
          {songDetails.composer}!!
        </p>
        <Document file={songDetails.url_path} onLoadSuccess={onPdfSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}
