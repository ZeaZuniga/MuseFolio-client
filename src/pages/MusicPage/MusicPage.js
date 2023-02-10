import "./MusicPage.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export default function MusicPage() {
  const [songDetails, setSongDetails] = useState([]);
  const currentSong = useParams().songId;
  const inputPress = useRef();

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

  useEffect(() => {
    document.addEventListener("keydown", inputFunction);
    return () => {
      document.removeEventListener("keydown", inputFunction);
    };
  }, [pageNumber]);

  const inputFunction = (event) => {
    if (event.key === "ArrowRight" || event.key === " ") {
      changePage(1);
    } else if (event.key === "ArrowLeft" && pageNumber > 1) {
      changePage(-1);
    }
  };

  const onPdfSuccess = () => {
    setPageNumber(1);
  };

  const changePage = (num) => {
    setPageNumber(pageNumber + num);
  };

  if (!songDetails.id) {
    return;
  } else {
    return (
      <div className="musicpage" ref={inputPress}>
        <Document
          file={songDetails.url_path}
          onLoadSuccess={onPdfSuccess}
          className="pdf__document"
        >
          <Page pageNumber={pageNumber} className="pdf__page" />
        </Document>
        <div className="document-nav">
          <div
            className="document-nav--left"
            onClick={() => {
              if (pageNumber > 1) {
                changePage(-1);
              }
            }}
          ></div>
          <div
            className="document-nav--right"
            onClick={() => {
              changePage(1);
            }}
          ></div>
        </div>
      </div>
    );
  }
}
