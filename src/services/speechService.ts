interface SpeechServiceState {
  isSpeaking: boolean;
  voices: SpeechSynthesisVoice[];
}

class SpeechService {
  private static instance: SpeechService;
  private state: SpeechServiceState = {
    isSpeaking: false,
    voices: [],
  };

  private constructor() {
    this.initializeVoices();
  }

  public static getInstance(): SpeechService {
    if (!SpeechService.instance) {
      SpeechService.instance = new SpeechService();
    }
    return SpeechService.instance;
  }

  private initializeVoices(): void {
    const loadVoices = () => {
      this.state.voices = window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.state.voices;
  }

  public isCurrentlySpeaking(): boolean {
    return this.state.isSpeaking;
  }

  public speak(text: string): void {
    if (this.state.isSpeaking) {
      this.stop();
      return;
    }

    const hebrewVoice = this.state.voices.find(
      (voice) => voice.lang.includes('he') || voice.lang.includes('iw')
    );

    const utterance = new SpeechSynthesisUtterance(text);

    if (hebrewVoice) {
      utterance.voice = hebrewVoice;
    }

    utterance.lang = 'he-IL';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.state.isSpeaking = true;
    };

    utterance.onend = () => {
      this.state.isSpeaking = false;
    };

    utterance.onerror = () => {
      this.state.isSpeaking = false;
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    window.speechSynthesis.cancel();
    this.state.isSpeaking = false;
  }

  public cleanup(): void {
    this.stop();
    window.speechSynthesis.onvoiceschanged = null;
  }
}

export const speechService = SpeechService.getInstance();
