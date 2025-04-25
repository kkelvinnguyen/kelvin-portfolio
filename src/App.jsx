import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Landing } from './components/sections/Landing';
import InfiniteSlider from "./components/InfiniteSlider";
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { TechnicalSkills } from './components/sections/TechnicalSkills';
import { Footer } from './components/sections/Footer';
import "./index.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <Landing />
      <InfiniteSlider />
      <Projects />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="w-full lg:w-1/2">
          <Experience />
        </div>
        <div className="w-full lg:w-1/2">
          <TechnicalSkills />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
