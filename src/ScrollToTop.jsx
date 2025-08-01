import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
