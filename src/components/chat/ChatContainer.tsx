import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LegalCategory } from '../../types/legal';
import { ChatMessage } from './ChatMessage';
import { CategorySelector } from '../CategorySelector';
import { CategoryForm } from '../forms/CategoryForm';
import { useChat } from '../../hooks/useChat';
import { TypingAnimation } from '../TypingAnimation';

export const ChatContainer = () => {
  const { messages, isLoading, sendRequest, resetMessages } = useChat();
  const [selectedCategory, setSelectedCategory] = useState<LegalCategory>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Reset messages when the component is mounted (new chat)
    resetMessages();
  }, []);

  const handleCategorySelect = (category: LegalCategory) => {
    if (category !== selectedCategory) {
      resetMessages();
      setSelectedCategory(category);
    }
  };

  const handleCategorySubmit = (
    details: Record<string, string>,
    sourceUrl?: string
  ) => {
    if (selectedCategory) {
      sendRequest(selectedCategory, details, sourceUrl);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 mb-4 max-w-full mx-auto w-full">
      <CategorySelector
        onSelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {selectedCategory && (
        <CategoryForm
          key={selectedCategory}
          category={selectedCategory}
          onSubmit={handleCategorySubmit}
          isLoading={isLoading}
        />
      )}

      <div
        className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto mt-6 pr-4 w-full"
        role="list"
        aria-label="Chat messages"
      >
        <AnimatePresence>
          {messages
            .filter(
              (message) =>
                message.category === selectedCategory ||
                message.id === 'welcome'
            )
            .map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatMessage
                  isBot={message.isBot}
                  message={message.text}
                  category={message.category}
                />
              </motion.div>
            ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start w-full"
          >
            <div className="bg-white p-4 rounded-lg shadow-md w-full">
              <TypingAnimation />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
