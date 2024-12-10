import { useState } from 'react';
import { Message, LegalCategory } from '../types/legal';
import { geminiService } from '../services/gemini';

export function useChat() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      isBot: true,
      text: 'שלום! אני עוזר משפטי מבוסס AI. אנא בחר קטגוריה להתחיל.',
      timestamp: Date.now(),
    },
  ]);
 
  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    setMessages((prev) => [
      ...prev,
      {
        ...message,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      },
    ]);
  };

  const resetMessages = () => {
    // Completely clear all previous messages and only add the welcome message
    setMessages([
      {
        id: 'welcome',
        isBot: true,
        text: 'שלום! אני עוזר משפטי מבוסס AI. אנא בחר קטגוריה להתחיל.',
        timestamp: Date.now(),
        category: undefined, 
      },
    ]);
  };

  const sendRequest = async (
    category: LegalCategory,
    details: Record<string, string>,
    sourceUrl?: string
  ) => {
    if (isLoading) return;

   

    const userMessage = Object.entries(details)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    addMessage({
      isBot: false,
      text: userMessage,
      category,
    });

    setIsLoading(true);

    try {
      const response = await geminiService.getLegalResponse({
        category,
        details,
        sourceUrl,
      });

      addMessage({
        isBot: true,
        text: response.content,
        category: response.category,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'שגיאה בלתי צפויה התרחשה';
      addMessage({
        isBot: true,
        text: `מצטער, לא הצלחתי לקבל תשובה. ${errorMessage}. אנא נסה שוב מאוחר יותר.`,
        category,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendRequest,
    resetMessages,
  };
}
