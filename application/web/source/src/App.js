import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import NavbarComponent from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ArtworkPage from "./pages/artworkPage/ArtworkPage";
import ArtistsPage from "./pages/artworkPage/ArtistsPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artworks" element={<ArtworkPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
      </Routes>
    </div>
  );
}

export default App;
