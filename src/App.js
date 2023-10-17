import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbarSection/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import LoginSignup from "./components/loginSignUpComponent/LoginSignup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/Login" element={<LoginSignup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
