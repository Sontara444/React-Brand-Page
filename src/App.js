import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginSignup from './components/loginSignUpComponent/LoginSignup';

function App() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <LoginSignup />
    </div>
  );
}

export default App;
