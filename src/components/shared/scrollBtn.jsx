import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsScrollBtnVisible(true);
    } else if (scrolled <= 300) {
      setIsScrollBtnVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-btn"
      onClick={scrollToTop}
      style={{
        opacity: isScrollBtnVisible ? "1" : "0",
        width: isScrollBtnVisible ? "3.5rem" : "0",
        height: isScrollBtnVisible ? "3.5rem" : "0",
      }}
    >
      <FaArrowCircleUp className="icon" />
    </button>
  );
};

export default ScrollToTopButton;
