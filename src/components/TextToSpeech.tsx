import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function TextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const toggleSpeech = () => {
    if (!speechSynthesis) return;

    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'he-IL'; // הגדרת שפה לעברית
      utterance.rate = 1.0; // מהירות הקראה רגילה
      utterance.pitch = 1.0; // גובה קול רגיל

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };
    }
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
