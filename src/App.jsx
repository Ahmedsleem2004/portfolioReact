import { useState, useEffect } from "react";

import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import SkillsSlider from "./component/SkillsSlider";
import Skills from "./component/Skils";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    </div>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADER */}
      {loading && <Loader />}

      {/* MAIN APP */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <SkillsSlider />
        <Contact />
      </div>
    </>
  );
};

export default App;