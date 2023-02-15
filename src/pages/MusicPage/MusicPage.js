import "./MusicPage.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import menu from "../../assets/images/menu.svg";

export default function MusicPage({ userId }) {
  const [navDisplay, setNavDisplay] = useState("hidden");
  const [songDetails, setSongDetails] = useState([]);
  const currentSong = useParams().songId;
  const inputPress = useRef();

  const [pageNumber, setPageNumber] = useState(1);

  const toggleNav = () => {
    if (navDisplay === "hidden") {
      setNavDisplay("visible");
    } else if (navDisplay === "visible") {
      setNavDisplay("hidden");
    }
  };

  useEffect(() => {
    const getSongDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/song/${currentSong}`,
        {
          params: {
            user: userId,
          },
        }
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

  const onPdfSuccess = (s) => {
    console.log(s);
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
        <section className="navMenu">
          <div className="navMenu__icon-wrapper" onClick={toggleNav}>
            <img className="navMenu__icon" src={menu} alt="Menu Icon" />
          </div>
          <ul className={`navMenu__list ${navDisplay}`}>
            <li className="navMenu__item">
              <Link to="/" className="navMenu__link">
                Home
              </Link>
            </li>
            <li className="navMenu__item">
              <Link to="/search" className="navMenu__link">
                Search
              </Link>
            </li>
            <li className="navMenu__item">
              <Link to={`/${currentSong}/edit`} className="navMenu__link">
                Edit Song
              </Link>
            </li>
          </ul>
        </section>
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
