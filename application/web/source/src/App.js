import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import NavbarComponent from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./pages/coffeePage/GalleryPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artworks" element={<GalleryPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
