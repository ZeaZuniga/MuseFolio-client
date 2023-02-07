import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MusicPage from "./pages/MusicPage/MusicPage";

function App() {
  return (
    <div className="App">
      <Router>
        <h3>Hello World!</h3>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:id" element={<MusicPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
