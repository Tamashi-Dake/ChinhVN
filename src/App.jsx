import Header from "./components/Header";
import "./scss/app.scss";

import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SkillSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <ProjectSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "1rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>

        <ScrollToTopButton />
      </main>
    </div>
  );
};

export default App;
