import "./SearchPage.scss";
import { useRef, useState } from "react";
import axios from "axios";
import SongCard from "../../components/SongCard/SongCard";

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
        <h1>This is the SearchPage!!!!</h1>
        <button onClick={allSearch}>View All</button>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="input">Search by title or composer</label>
          <input
            type="text"
            value={searchField}
            placeholder="Search..."
            onChange={handleSearchField}
            id="search"
          />
          <input type="submit" />
        </form>
      </div>
    );
  } else {
    const searchList = searchResults.map((song) => {
      return <SongCard key={song.id} id={song.id} title={song.title} />;
    });

    return (
      <div className="searchpage">
        <button onClick={allSearch}>View All</button>
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="input">Search by title or composer</label>
          <input
            type="text"
            value={searchField}
            placeholder="Search..."
            onChange={handleSearchField}
            id="search"
          />
          <input type="submit" />
        </form>
        <h1 className="searchpage__header">Here's your results!</h1>
        <section className="searchpage-restults">{searchList}</section>
      </div>
    );
  }
}
