import Header from "./components/Header";
import "./scss/app.scss";

import { useState } from "react";
import HeroSection from "./components/Hero";
import SkillSection from "./components/Skill";
import ProjectSection from "./components/Project";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Header setIsDarkMode={setIsDarkMode} />
      <main>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <section id="about" className="about "></section>
        <section id="contact" className="contact "></section>
      </main>
    </div>
  );
};

export default App;
