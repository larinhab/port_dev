import { useState } from 'react';

const colors = ['#EB92BE', '#48AEDD', '#92db3e', '#e0d316']

export function useColorToggle() {
  const [colorIndex, setColorIndex] = useState(0)

  const toggleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
  };

  return [colors[colorIndex], toggleColor]
}