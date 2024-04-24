// eslint-disable-next-line react/prop-types
const HamburgerNav = ({ isClosed }) => {
  if (!isClosed) {
    return (
      <nav className="hamburger-menu">
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
    );
  }
};

export default HamburgerNav;
