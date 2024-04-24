import { useState } from "react";
import useScrollDirection from "../assets/useScroll";
import useBlockScroll from "../assets/useBlockScroll";
import "../scss/header.scss";

const Header = (props) => {
  const scrollDirection = useScrollDirection();
  const [blockScroll, allowScroll] = useBlockScroll();

  const [isClosed, setIsClosed] = useState(true);

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
    // eslint-disable-next-line react/prop-types
    props.setIsDarkMode((prev) => !prev);
  };
  return (
    <header className={`${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="logo">
        <img className="logo-img" src="/images/Dake.png" alt="logo" />
        <h1 className="logo-title">ChinhVN</h1>
      </div>

      <nav className="navigation">
        <div className="nav-link">
          <a href="/#hero">
            <h2>Home</h2>
          </a>
        </div>
        <div className="nav-link">
          <a href="/#projects">
            <h2>Projects</h2>
          </a>
        </div>
        <div className="nav-link">
          <a href="/#contact">
            <h2>Contact</h2>
          </a>
        </div>
        <div className="nav-link">
          <a href="#">
            <h2>Resume</h2>
          </a>
        </div>
        <div className="nav-link">
          <button className="toggle-mode" onClick={toggleMode}>
            Dark/light
          </button>
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
        <div className="nav-link">
          <a href="/#hero">Home</a>
        </div>
        <div className="nav-link">
          <a href="/#projects">Projects</a>
        </div>
        <div className="nav-link">
          <a href="/#contact">Contact</a>
        </div>
        <div className="nav-link">
          <a href="#">Resume</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
