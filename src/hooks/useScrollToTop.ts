import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]); // run every time the route changes

  return null;
};

export default useScrollToTop;
