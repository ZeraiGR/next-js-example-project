import React from 'react';

export const useScrollY = (): number => {
  const isBrowser = typeof window !== 'undefined';
  const [scrollY, setscrollY] = React.useState<number>(0);

  const handleScroll = () => {
    const currentScroll = isBrowser ? window.scrollY : 0;
    setscrollY(currentScroll);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};
