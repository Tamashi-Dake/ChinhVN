import Header from "./components/Header";
import "./scss/app.scss";

import { useState } from "react";
import HeroSection from "./components/Hero";
import SkillSection from "./components/Skill";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Header setIsDarkMode={setIsDarkMode} />
      <main>
        <HeroSection />
        <SkillSection />
        <section id="projects" className="projects ">
          aa
        </section>
        <section id="about" className="about "></section>
        <section id="contact" className="contact "></section>
      </main>
    </div>
  );
};

export default App;
