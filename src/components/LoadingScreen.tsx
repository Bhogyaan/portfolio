
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Zap, Star } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing creativity...",
    "Loading innovations...",
    "Preparing digital magic...",
    "Almost ready..."
  ];

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 20, y: 30 },
    { Icon: Palette, delay: 0.5, x: -20, y: 50 },
    { Icon: Zap, delay: 1, x: 30, y: 20 },
    { Icon: Star, delay: 1.5, x: -30, y: 40 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, x, -x, 0],
            y: [0, y, -y, 0]
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + index * 10}%`
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo/Spinner */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 border-4 border-primary/20 rounded-full relative"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-r-accent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
          
          {/* Center Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-primary"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Alex Morgan
          </span>
        </motion.h1>

        {/* Loading Text */}
        <motion.div
          className="h-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentText}
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingTexts[currentText]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-80 h-2 bg-muted rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "loop"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Progress Percentage */}
        <motion.p
          className="text-sm text-muted-foreground mt-4 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {progress}%
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-accent rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
