import { useEffect } from 'react';

useEffect(() => {
  const header = document.querySelector('.container--sticky-header');

  const handleScroll = () => {
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

