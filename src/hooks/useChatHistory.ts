import { useState, useEffect } from 'react';
import { LegalCategory } from '../types/legal';

interface ChatMessage {
  id: string;
  isBot: boolean;
  text: string;
  category?: LegalCategory;
}

interface ChatSession {
  id: string;
  messages: ChatMessage[];
  category?: LegalCategory;
  timestamp: number;
}

export const useChatHistory = () => {
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }
  }, []);

  const saveSession = (session: ChatSession) => {
    const updatedHistory = [session, ...chatHistory.slice(0, 9)];
    setChatHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setChatHistory([]);
    localStorage.removeItem('chatHistory');
  };

  return { chatHistory, saveSession, clearHistory };
};

