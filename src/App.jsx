import Header from "./components/Header";
import "./scss/app.scss";

import { useState } from "react";
import HeroSection from "./components/Hero";
import SkillSection from "./components/Skill";
import ProjectSection from "./components/Project";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import ScrollToTopButton from "./components/shared/scrollBtn";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      {/* <div id="cursor" className="cursor"></div> */}
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <main>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <ScrollToTopButton />
      </main>
    </div>
  );
};

export default App;
