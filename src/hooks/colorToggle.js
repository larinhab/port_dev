import { useState } from 'react';

const colors = ['#EB92BE', '#48AEDD', '#CBDB3E'];

export function useColorToggle() {
  const [colorIndex, setColorIndex] = useState(0);

  const toggleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return [colors[colorIndex], toggleColor];
}