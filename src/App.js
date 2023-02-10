import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MusicPage from "./pages/MusicPage/MusicPage";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage userId={userId} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage userId={userId} />} />
          <Route path="/:songId" element={<MusicPage userId={userId} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
