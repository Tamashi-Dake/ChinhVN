/* eslint-disable react/prop-types */
import { useState } from "react";
import useScrollDirection from "../assets/useScroll";
import useBlockScroll from "../assets/useBlockScroll";
import "../scss/header.scss";
import ModeSwitch from "./shared/switch";

const Header = (props) => {
  const scrollDirection = useScrollDirection();
  const [blockScroll, allowScroll] = useBlockScroll();

  const [isClosed, setIsClosed] = useState(true);
  const navLinks = [
    {
      link: "/#hero",
      title: "Home",
    },
    {
      link: "/#projects",
      title: "Projects",
    },
    {
      link: "/#contact",
      title: "Contact",
    },
    {
      link: "https://drive.google.com/file/d/1-qgM2MHV-erziXnqW4NYQQ2_fUDRko_M/view?usp=sharing",
      title: "Resume",
    },
  ];

  const handleHamburger = () => {
    setIsClosed((prev) => !prev);
    const nav = document.querySelector(".hamburger-navigation") || {};
    const hamburgerNav = document.getElementById("hamburger-nav");
    if (isClosed) {
      nav.setAttribute("aria-expanded", "true");
      nav.setAttribute("data-state", "opened");
      hamburgerNav.setAttribute("aria-hidden", "false");
      blockScroll();
    } else {
      nav.setAttribute("aria-expanded", "false");
      nav.setAttribute("data-state", "closed");
      hamburgerNav.setAttribute("aria-hidden", "true");
      allowScroll();
    }
  };

  const toggleMode = () => {
    props.setIsDarkMode((prev) => !prev);
  };
  return (
    <header className={`${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="logo">
        <img className="logo-img" src="/images/Dake.png" alt="logo" />
        <h1 className="logo-title">ChinhVN</h1>
      </div>

      <nav className="navigation">
        {navLinks.map((item, index) => (
          <div className="nav-link" key={index}>
            <a
              href={item.link}
              target={item.link.includes("https") ? "_blank" : ""}
              rel="noreferrer"
            >
              <h2>{item.title}</h2>
            </a>
          </div>
        ))}

        <div className="nav-link">
          <ModeSwitch toggleMode={toggleMode} isDarkMode={props.isDarkMode} />
        </div>
      </nav>

      <button
        className="hamburger-navigation"
        aria-controls="hamburger-nav"
        aria-expanded="false"
        onClick={handleHamburger}
      >
        <svg
          fill="var(--text-color)"
          className="hamburger"
          viewBox="0 0 100 100"
          width="30"
        >
          <rect
            className="line top"
            width="90"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="90"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="90"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>

      <nav className="hamburger-menu" id="hamburger-nav">
        <div className="hamburger-mode-switch">
          <ModeSwitch toggleMode={toggleMode} isDarkMode={props.isDarkMode} />
        </div>

        {navLinks.map((item, index) => (
          <div className="nav-link" key={index}>
            <a
              href={item.link}
              onClick={handleHamburger}
              target={item.link.includes("https") ? "_blank" : ""}
              rel="noreferrer"
            >
              <h2>{item.title}</h2>
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
