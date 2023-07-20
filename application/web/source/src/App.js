// import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import NavbarComponent from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CoffeePage from "./pages/coffeePage/CoffeePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div id="app">
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hot" element={<CoffeePage />} />
          <Route path="/iced" element={<CoffeePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
