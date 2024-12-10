import { motion } from 'framer-motion';

export const TypingAnimation = () => {
  return (
    <div className="flex space-x-2 mt-3">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-3 h-3 bg-gray-400 rounded-full"
          animate={{
            y: ['0%', '-50%', '0%'],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
};
