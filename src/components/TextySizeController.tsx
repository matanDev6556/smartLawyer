import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

export const TextSizeControls: React.FC = () => {
  const { increaseTextSize, decreaseTextSize, resetTextSize } = useAccessibility();

  return (
    <div className="text-size-controls flex justify-end gap-2 p-2 bg-white shadow-md rounded-md">
      <button
        onClick={increaseTextSize}
        aria-label="הגדל טקסט"
        className="px-2 py-1 bg-blue-500 text-white rounded-md"
      >
        + טקסט גדול
      </button>
      <button
        onClick={decreaseTextSize}
        aria-label="הקטן טקסט"
        className="px-2 py-1 bg-blue-500 text-white rounded-md"
      >
        - טקסט קטן
      </button>
      <button
        onClick={resetTextSize}
        aria-label="איפוס טקסט"
        className="px-2 py-1 bg-gray-300 text-black rounded-md"
      >
        איפוס
      </button>
    </div>
  );
};