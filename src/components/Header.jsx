import "../scss/header.scss";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logo-img" src="/images/Dake.png" alt="logo" />
        <h1 className="logo-title">ChinhVN</h1>
      </div>
      <nav className="navigation">
        <div className="nav-link">
          <a href="/">
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
          <button className="toggle-mode">Dark/light</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
