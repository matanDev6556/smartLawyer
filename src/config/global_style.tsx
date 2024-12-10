import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

export const GlobalStyle: React.FC = () => {
  const { textSize } = useAccessibility();

  return (
    <style>
      {`
        :root {
          font-size: ${textSize}px;
        }
      `}
    </style>
  );
};