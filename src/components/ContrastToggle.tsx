import { useState } from 'react';
import { Contrast } from 'lucide-react';

export function ContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <button
      onClick={toggleContrast}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={isHighContrast ? 'כבה ניגודיות גבוהה' : 'הפעל ניגודיות גבוהה'}
    >
      <Contrast className="w-5 h-5" />
    </button>
  );
}
