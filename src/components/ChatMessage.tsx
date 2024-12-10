import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { LegalCategory } from '../types/legal';
import { Badge } from '@/components/ui/badge';
import React from 'react';

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

export const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message, category }) => {
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
          className={`max-w-md p-4 rounded-lg ${
            isBot
              ? 'bg-white text-gray-800 shadow-md'
              : 'bg-blue-500 text-white'
          }`}
          role="article"
          aria-label={isBot ? 'תשובת AI' : 'ההודעה שלך'}
        >
          <p className="text-sm mb-2">{formatMessage(message)}</p>
          {category && (
            <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-800">
              {category}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
};

