import { useState, useEffect } from 'react';

const borderColors = ['#EB92BE', '#48AEDD', '#92db3e', '#e0d316'];

export function useBorderColorToggle() {
  const [borderColorIndex, setBorderColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBorderColorIndex((prevIndex) => (prevIndex + 1) % borderColors.length);
    }, 1000); 
    
    document.documentElement.style.setProperty('--border-color', borderColors[borderColorIndex]);

    return () => clearInterval(intervalId);
  }, [borderColorIndex]);

  return borderColors[borderColorIndex];
}