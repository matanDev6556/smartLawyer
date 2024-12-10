import {  RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewChatButtonProps {
  onClick: () => void;
}

export const NewChatButton: React.FC<NewChatButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="התחל שיחה חדשה"
    >
      <RefreshCcw size={24} aria-hidden="true" />
    </motion.button>
  );
};

