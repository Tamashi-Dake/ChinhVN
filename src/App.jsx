import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import "./scss/app.scss";
import { PiHandWaving } from "react-icons/pi";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="hero-section ">
          <div className="hero-info">
            <h1 className="hero-title">
              Hi, I&apos;m <span>Chinh</span> {/* TODO: Jiggle handwave */}
              <PiHandWaving
                style={{
                  display: "inline-block",
                  animation: "wiggly 4s ease-in-out 1.5s infinite ",
                }}
              />
            </h1>
            {/* might do: Text animation
            Web Developer
            Frontend Developer
            React Developer
            Next.js Developer
             */}
            {/* <h2 className="hero-subtitle">Web Developer</h2> */}
            <div className="hero-desc">
              {" "}
              I&apos;m Vu Ngoc Chinh. A passionate Web Developer based in Ha
              Noi, Vietnam. 💻
            </div>
            <div className="hero-link">
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
            </div>
            <div className="hero-btns">
              <button className="btn">Contact me</button>
              <button className="btn">My Resume</button>
            </div>
          </div>
          <div className="hero-img-container">
            {/* placeholder image */}
            <img
              // src="https://i.imgur.com/dsFKDfU.jpeg"
              src="https://via.placeholder.com/400"
              alt="hero"
              className="hero-img"
            />
          </div>
        </section>
        <section id="technology" className="skill ">
          <h2 className="skill-title">Technology</h2>
          <div className="skill-list">
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="html"
                className="skill-img"
              />
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="css"
                className="skill-img"
              />
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="javascript"
                className="skill-img"
              />
              <div className="skill-name">JavaScript</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="react"
                className="skill-img"
              />
              <div className="skill-name">React</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="node"
                className="skill-img"
              />
              <div className="skill-name">Node.js</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="mongodb"
                className="skill-img"
              />
              <div className="skill-name">MongoDB</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="express"
                className="skill-img"
              />
              <div className="skill-name">Express</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="redux"
                className="skill-img"
              />
              <div className="skill-name">Redux</div>
            </div>
            <div className="skill-item">
              <img
                src="https://via.placeholder.com/100"
                alt="sass"
                className="skill-img"
              />
              <div className="skill-name">Sass</div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects "></section>
        <section id="about" className="about "></section>
        <section id="contact" className="contact "></section>
      </main>
    </>
  );
};

export default App;
