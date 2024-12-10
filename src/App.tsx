import { useState } from 'react';
import { Header } from './components/Header';
import { ChatContainer } from './components/chat/ChatContainer';
import { NewChatButton } from './components/ResetChatButton';
import { HelpfulTip } from './components/HelpfulTip';

import { motion } from 'framer-motion';
import { GlobalStyle } from './config/global_style';
import { TextSizeControls } from './components/TextySizeController';

function App() {
  const [key, setKey] = useState(0);

  const handleNewChat = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <GlobalStyle />
      <motion.div
        className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <TextSizeControls />
          <Header />
          <main id="main-content">
            <ChatContainer key={key} />
            <NewChatButton onClick={handleNewChat} />
            <HelpfulTip />
          </main>
          <footer>
            <p className="text-center text-sm text-gray-500 mt-4" dir="rtl">
              הערה: התשובות מסופקות על ידי AI ואינן מהוות ייעוץ משפטי מקצועי. יש
              להתייעץ עם עורך דין מוסמך לקבלת ייעוץ משפטי מחייב.
            </p>
          </footer>
        </div>
      </motion.div>
    </>
  );
}

export default App;
