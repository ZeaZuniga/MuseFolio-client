import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MusicPage from "./pages/MusicPage/MusicPage";
import EditPage from "./pages/EditPage/EditPage";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [userId, setUserId] = useState();

  if (!userId) {
    return (
      <div className="App">
        <LoginPage setUserId={setUserId} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              element={
                <>
                  <NavBar setUserId={setUserId} />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Homepage userId={userId} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/search" element={<SearchPage userId={userId} />} />
              <Route
                path="/:songId/edit"
                element={<EditPage userId={userId} />}
              />
            </Route>

            <Route
              path="/:songId"
              element={<MusicPage userId={userId} setUserId={setUserId} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
