import "./SearchPage.scss";
import { useRef, useState } from "react";
import axios from "axios";
import SongCard from "../../components/SongCard/SongCard";
import Button from "../../components/Button/Button";

export default function SearchPage({ userId }) {
  const formRef = useRef();

  const [searchResults, setSearchResults] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleSearchField = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getSearch = async () => {
      const { data } = await axios.get("http://localhost:8080/search", {
        params: {
          user: userId,
          search: `${formRef.current.search.value}`,
        },
      });
      setSearchResults(data);
      setSearchField("");
    };

    getSearch();
  };

  const allSearch = () => {
    const getAll = async () => {
      const { data } = await axios.get("http://localhost:8080", {
        params: {
          user: userId,
        },
      });
      setSearchResults(data);
    };

    getAll();
  };

  if (!searchResults[0]) {
    return (
      <div className="searchpage">
        <section className="main-section">
          <h1 className="searchpage__phrase">Looking for that one song?</h1>
          <form
            onSubmit={handleSubmit}
            id="searchForm"
            ref={formRef}
            className="searchpage__form"
          >
            <label className="form__label" htmlFor="input">
              Try searching by title or composer
            </label>
            <input
              className="form__input"
              type="text"
              value={searchField}
              placeholder="Sir Duke..."
              onChange={handleSearchField}
              id="search"
            />
          </form>
          <div className="searchpage__button-container">
            <input
              type="submit"
              className="button submit"
              form="searchForm"
              value="Submit"
            />
            <button onClick={allSearch} className="button view-all">
              View All
            </button>
          </div>
        </section>
      </div>
    );
  } else {
    const searchList = searchResults.map((song) => {
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
      <div className="searchpage searchpage--results">
        <section className="main-section main-section--results">
          <h1 className="searchpage__phrase searchpage__phrase--results">
            Still Looking for that one song?
          </h1>
          <form
            onSubmit={handleSubmit}
            id="searchForm"
            ref={formRef}
            className="searchpage__form"
          >
            <label className="form__label" htmlFor="input">
              Try searching by title or composer
            </label>
            <input
              className="form__input"
              type="text"
              value={searchField}
              placeholder="Sir Duke..."
              onChange={handleSearchField}
              id="search"
            />
          </form>
          <div className="searchpage__button-container">
            <input
              type="submit"
              className="button submit"
              form="searchForm"
              value="Submit"
            />
            <button onClick={allSearch} className="button view-all">
              View All
            </button>
          </div>
        </section>
        <hr className="linebreak" />
        <section className="results-section">
          <h2 className="searchpage__header">Here's your results!</h2>
          <div className="searchpage__results">{searchList}</div>
        </section>
      </div>
    );
  }
}
