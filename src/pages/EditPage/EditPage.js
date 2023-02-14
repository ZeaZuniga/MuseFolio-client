import Button from "../../components/Button/Button";
import "./EditPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditPage({ userId }) {
  const [title, setTitle] = useState("");
  const [composer, setComposer] = useState("");
  const [symphonic, setSymphonic] = useState(false);
  const [tuba, setTuba] = useState(false);
  const [jazz, setJazz] = useState(false);
  const [piano, setPiano] = useState(false);
  const [romantic, setRomantic] = useState(false);
  const [selfComposed, setSelfComposed] = useState(false);
  const [leadSheets, setLeadSheets] = useState(false);
  const [classicSoul, setClassicSoul] = useState(false);
  const [studioGhibli, setStudioGhibli] = useState(false);

  const [songDetails, setSongDetails] = useState({});

  const [favorite, setFavorite] = useState(false);
  const currentSong = useParams().songId;

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
      setTitle(data[0].title);
      setComposer(data[0].composer);
      if (data[0].tags.includes("symphonic")) {
        setSymphonic(true);
      }
      if (data[0].tags.includes("tuba")) {
        setTuba(true);
      }
      if (data[0].tags.includes("jazz")) {
        setJazz(true);
      }
      if (data[0].tags.includes("piano")) {
        setPiano(true);
      }
      if (data[0].tags.includes("romantic")) {
        setRomantic(true);
      }
      if (data[0].tags.includes("self composed")) {
        setSelfComposed(true);
      }
      if (data[0].tags.includes("lead sheets")) {
        setLeadSheets(true);
      }
      if (data[0].tags.includes("classic soul")) {
        setClassicSoul(true);
      }
      if (data[0].tags.includes("studio ghibli")) {
        setStudioGhibli(true);
      }

      if (data[0].favorite === "1") {
        setFavorite(true);
      }
    };

    getSongDetails();
  }, []);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const composerHandler = (e) => {
    setComposer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let tagArray = [];

    if (symphonic) {
      tagArray.push("symphonic");
    }
    if (tuba) {
      tagArray.push("tuba");
    }
    if (jazz) {
      tagArray.push("jazz");
    }
    if (piano) {
      tagArray.push("piano");
    }
    if (romantic) {
      tagArray.push("romantic");
    }
    if (selfComposed) {
      tagArray.push("self composed");
    }
    if (leadSheets) {
      tagArray.push("lead sheets");
    }
    if (classicSoul) {
      tagArray.push("classic soul");
    }
    if (studioGhibli) {
      tagArray.push("studio ghibli");
    }

    const updatedObject = {
      id: +currentSong,
      title: title,
      composer: composer,
      url_path: songDetails.url_path,
      tags: JSON.stringify(tagArray),
      favorite: +favorite,
    };

    const sendChanges = async () => {
      const res = await axios.put(
        `http://localhost:8080/song/${currentSong}?user=${userId}`,
        updatedObject
      );
      alert(res.data);
    };

    sendChanges();
  };

  return (
    <div className="editpage">
      <h1 className="editpage__header">Need to make a change? Make it here!</h1>
      <form className="editpage__form" onSubmit={submitHandler}>
        <section className="form__information">
          <label className="form__title--label">
            Title:
            <input
              className="form__title--text"
              type="text"
              name="title"
              value={title}
              onChange={titleHandler}
            />
          </label>
          <label className="form__composer--label">
            Composer:
            <input
              className="form__composer--text"
              type="text"
              name="composer"
              value={composer}
              onChange={composerHandler}
            />
          </label>
        </section>
        <h3 className="form__checkbox--header">Tags:</h3>
        <section className="form__checkbox">
          <label
            htmlFor="symphonic"
            className={`form__checkbox--label ${symphonic}`}
          >
            Symphonic
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="symphonic"
              id="symphonic"
              checked={symphonic}
              onChange={() => {
                setSymphonic(!symphonic);
              }}
            />
          </label>
          <label htmlFor="tuba" className={`form__checkbox--label ${tuba}`}>
            Tuba
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="tuba"
              id="tuba"
              checked={tuba}
              onChange={() => {
                setTuba(!tuba);
              }}
            />
          </label>
          <label htmlFor="jazz" className={`form__checkbox--label ${jazz}`}>
            Jazz
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="jazz"
              id="jazz"
              checked={jazz}
              onChange={() => {
                setJazz(!jazz);
              }}
            />
          </label>
          <label htmlFor="piano" className={`form__checkbox--label ${piano}`}>
            Piano
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="piano"
              id="piano"
              checked={piano}
              onChange={() => {
                setPiano(!piano);
              }}
            />
          </label>
          <label
            htmlFor="romantic"
            className={`form__checkbox--label ${romantic}`}
          >
            Romantic
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="romantic"
              id="romantic"
              checked={romantic}
              onChange={() => {
                setRomantic(!romantic);
              }}
            />
          </label>
          <label
            htmlFor="self-composed"
            className={`form__checkbox--label ${selfComposed}`}
          >
            Self Composed
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="self-composed"
              id="self-composed"
              checked={selfComposed}
              onChange={() => {
                setSelfComposed(!selfComposed);
              }}
            />
          </label>
          <label
            htmlFor="lead-sheets"
            className={`form__checkbox--label ${leadSheets}`}
          >
            Lead Sheets
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="lead sheets"
              id="lead-sheets"
              checked={leadSheets}
              onChange={() => {
                setLeadSheets(!leadSheets);
              }}
            />
          </label>
          <label
            htmlFor="classic-soul"
            className={`form__checkbox--label ${classicSoul}`}
          >
            Classic Soul
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="classic soul"
              id="classic-soul"
              checked={classicSoul}
              onChange={() => {
                setClassicSoul(!classicSoul);
              }}
            />
          </label>
          <label
            htmlFor="studio-ghibli"
            className={`form__checkbox--label ${studioGhibli}`}
          >
            Studio Ghibli
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="Studio Ghibli"
              id="studio-ghibli"
              checked={studioGhibli}
              onChange={() => {
                setStudioGhibli(!studioGhibli);
              }}
            />
          </label>
        </section>
        <label className={`form__favorite--label favorite-${favorite}`}>
          Favorite:
          <input
            type="checkbox"
            className="form__favorite--box"
            checked={favorite}
            onChange={() => {
              setFavorite(!favorite);
            }}
          />
        </label>
        <Button scssClass="button edit-submit" buttonText="Submit changes" />
      </form>
    </div>
  );
}
