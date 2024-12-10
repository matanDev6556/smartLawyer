import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { LegalCategory } from '../../types/legal';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi'; // אייקונים מ-react-icons

interface ChatMessageProps {
  isBot: boolean;
  message: string;
  category?: LegalCategory;
}

const formatMessage = (message: string) => {
  return message.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  isBot,
  message,
  category,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // משוב זמני
    });
  };

  return (
    <motion.div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex items-start space-x-3 ${
          isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
        }`}
      >
        <Avatar
          className={`w-10 h-10 ${
            isBot ? 'bg-blue-500' : 'bg-green-500'
          } flex items-center justify-center text-white font-bold`}
        >
          <span className="sr-only">{isBot ? 'תשובת AI' : 'הודעה שלך'}</span>
          {isBot ? 'AI' : 'את/ה'}
        </Avatar>
        <div
          className={`relative max-w-md p-4 rounded-lg ${
            isBot
              ? 'bg-white text-gray-800 shadow-md'
              : 'bg-blue-500 text-white'
          }`}
          role="article"
          aria-label={isBot ? 'תשובת AI' : 'ההודעה שלך'}
        >
          <p className="text-sm mb-2">{formatMessage(message)}</p>
          {category && (
            <Badge
              variant="secondary"
              className="text-xs bg-indigo-100 text-indigo-800"
            >
              {category}
            </Badge>
          )}

          {/* כפתור העתקה */}
          {isBot && (
            <button
              onClick={handleCopy}
              className="absolute bottom-0 left-2 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              aria-label="העתק הודעה"
            >
              {copied ? (
                <FiCheck className="w-4 h-4 text-green-500" /> // אייקון הצלחה
              ) : (
                <FiClipboard className="w-4 h-4 text-gray-600" /> // אייקון העתקה
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};