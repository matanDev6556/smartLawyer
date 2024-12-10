import React, { createContext, useContext, useState } from 'react';

interface AccessibilityContextProps {
  textSize: number;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  resetTextSize: () => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [textSize, setTextSize] = useState(16);

  const increaseTextSize = () => setTextSize((size) => Math.min(size + 2, 24));
  const decreaseTextSize = () => setTextSize((size) => Math.max(size - 2, 12));
  const resetTextSize = () => setTextSize(16);

  return (
    <AccessibilityContext.Provider
      value={{ textSize, increaseTextSize, decreaseTextSize, resetTextSize }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
};
