import PropTypes from "prop-types";

const ModeSwitch = (props) => {
  return (
    <label className="toggle-mode">
      <input type="checkbox" className="switch" />
      <span className="slider" onClick={props.toggleMode}></span>
    </label>
  );
};

ModeSwitch.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ModeSwitch;
