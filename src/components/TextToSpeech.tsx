import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speechService } from '@/services/speechService';

export function TextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // עדכון מצב ההקראה כאשר הוא משתנה בשירות
    const checkSpeakingState = () => {
      setIsSpeaking(speechService.isCurrentlySpeaking());
    };

    const interval = setInterval(checkSpeakingState, 100);
    return () => clearInterval(interval);
  }, []);

  const toggleSpeech = () => {
    const text = document.body.innerText;
    speechService.speak(text);
  };

  return (
    <button
      onClick={toggleSpeech}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={isSpeaking ? 'עצור הקראה' : 'התחל הקראה'}
    >
      {isSpeaking ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  );
}
