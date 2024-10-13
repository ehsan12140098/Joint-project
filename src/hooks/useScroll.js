import { useEffect, useState } from 'react';

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function getWindowScrollPosition() {
      setScrollY(window.scrollY);
    }

    document.addEventListener('scroll', getWindowScrollPosition);

    return () => {
      document.removeEventListener('scroll', getWindowScrollPosition);
    };
  }, []);

  return scrollY;
}
