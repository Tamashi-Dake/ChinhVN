import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction =
        scrollY > lastScrollY ? "down" : scrollY === 0 ? "up" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)
      ) {
        // console.log(scrollY);
        // not working
        if (scrollY > 40) {
          setScrollDirection(direction);
        }
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default useScrollDirection;
