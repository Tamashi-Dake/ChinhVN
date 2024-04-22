import { MdMail } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";
import { SiGoogledocs } from "react-icons/si";
import "../scss/hero.scss";
const HeroSection = () => {
  return (
    <section id="hero" className="hero-section ">
      <div className="hero-info">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-name">Chinh</span>
          <PiHandWaving
            style={{
              marginLeft: "1rem",
              display: "inline-block",
              animation: "wiggly 5s ease-in-out infinite ",
            }}
          />
        </h1>
        <h1 className="hero-subtitle">Web Developer</h1>
        {/* might do: Text animation
          Web Developer
          Frontend Developer
          React Developer
          Next.js Developer
           */}
        {/* <h2 className="hero-subtitle">Web Developer</h2> */}
        <div className="hero-desc">
          {" "}
          I&apos;m Vu Ngoc Chinh. A passionate Web Developer with a strong focus
          on Frontend Development based in Ha Noi, Vietnam. 💻
        </div>
        {/* <div className="hero-link">
          <a
            href="https://github.com/Tamashi-Dake"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hero-link-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tamashi-dake-abc123/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hero-link-icon" />
          </a>
        </div> */}
        <div className="hero-btns">
          <a href="mailto:tamashidake00@gmail.com" className="btn">
            <MdMail className="btn-icon" />
            <p>Contact me</p>
          </a>
          <a href="#" className="btn">
            <SiGoogledocs className="btn-icon" />
            <p>My Resume</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
