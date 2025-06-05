
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Zap, Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { theme } = useTheme();
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, hsl(240 10% 3.9%) 0%, hsl(240 10% 6%) 100%)'
          : 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(220 14.3% 97%) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: theme === 'dark' ? 0.1 : 0.05,
        }}
      ></div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            color: theme === 'dark' ? 'hsl(var(--primary))/20%' : 'hsl(var(--primary))/30%',
            left: `${20 + index * 15}%`,
            top: `${20 + index * 10}%`
          }}
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
            className="w-24 h-24 rounded-full relative"
            style={{
              border: `4px solid ${theme === 'dark' ? 'hsl(var(--primary))/20%' : 'hsl(var(--primary))/30%'}`,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '4px solid transparent',
                borderTopColor: 'hsl(var(--primary))',
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                border: '4px solid transparent',
                borderRightColor: 'hsl(var(--accent))',
              }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
          
          {/* Center Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: 'hsl(var(--primary))' }}
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
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            NR Bhogyaan
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
              className="text-lg"
              style={{ color: 'hsl(var(--muted-foreground))' }}
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
          className="w-80 h-2 rounded-full overflow-hidden mx-auto"
          style={{ backgroundColor: 'hsl(var(--muted))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div 
            className="h-full rounded-full relative"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
            }}
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
          className="text-sm mt-4 font-mono"
          style={{ color: 'hsl(var(--muted-foreground))' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {progress}%
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 rounded-full"
        style={{ backgroundColor: 'hsl(var(--primary))' }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 rounded-full"
        style={{ backgroundColor: 'hsl(var(--accent))' }}
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
