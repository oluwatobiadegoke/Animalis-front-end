import { useState, useEffect } from "react";

const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 5000);
    return clearTimeout(timeout);
  }, [isScrolling]);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setIsScrolling(scrollY === lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolling]);
  return isScrolling;
};

export default useScrolling;
