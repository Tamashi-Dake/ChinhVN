import useScrollDirection from "../assets/useScroll";
import "../scss/header.scss";

const Header = (props) => {
  const scrollDirection = useScrollDirection();
  // console.log(scrollDirection);
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
        {/* <div className="nav-link">
          <a href="/#technology">Technology</a>
        </div> */}
        <div className="nav-link">
          <a href="/#projects">
            <h2>Projects</h2>
          </a>
        </div>
        {/* <div className="nav-link">
          <a href="/#about">About</a>
        </div> */}
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
        {/* <div className="nav-link">
          <a href="/forfun">For fun</a>
        </div> */}
        <div className="nav-link">
          <button className="toggle-mode" onClick={toggleMode}>
            Dark/light
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
