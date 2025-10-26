import FontAwesome from '@/components/ui/app/fontawesome';
import { Button } from '@/components/ui/shadcn/button';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

interface ScrollToTopProps {
  showAfter?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showAfter = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > showAfter);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null; // do not render if not visible

  return (
    <Button
      type="button"
      onClick={handleScrollToTop}
      id="in-scroll-to-top"
      name="scroll-to-top"
      className={clsx(
        'fixed right-6 bottom-6 cursor-pointer rounded-full size-10 transition-all duration-400 ease-in-out z-50',
        'hover:bg-theme-navy',
        'bg-theme-orange'
      )}
    >
      <FontAwesome icon="fa-solid fa-chevron-up" />
    </Button>
  );
};

export default ScrollToTop;
