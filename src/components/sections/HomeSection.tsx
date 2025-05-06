
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeSection: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        // If we've typed the full string, start deleting after a pause
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        // If we've deleted everything, move to next text
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  // Background decoration circles
  const circles = [
    { size: 'w-64 h-64', top: '10%', left: '5%', color: 'from-primary/20' },
    { size: 'w-96 h-96', top: '30%', right: '10%', color: 'from-secondary/20' },
    { size: 'w-48 h-48', bottom: '10%', left: '20%', color: 'from-accent/20' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden">
      {/* Decorative background circles */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-radial ${circle.size} ${circle.color} blur-3xl opacity-30`}
          style={{ 
            top: circle.top || 'auto', 
            left: circle.left || 'auto',
            right: circle.right || 'auto',
            bottom: circle.bottom || 'auto'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2
          }}
        />
      ))}

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block gradient-border px-6 py-2 bg-background/50 dark:bg-background/30">
            <span className="text-sm md:text-base font-medium">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            variants={itemVariants} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Hi, I'm <span className="text-gradient">John Doe</span>
          </motion.h1>

          <motion.div
            variants={itemVariants} 
            className="h-16 md:h-20 flex items-center justify-center mb-8"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl text-accent">
              {displayText}
              <span className="animate-blink text-accent">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-foreground/80"
          >
            I build beautiful, responsive, and user-friendly web applications using modern technologies and cutting-edge design principles.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#about"
              className="enhanced-card group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="enhanced-card-inner flex items-center justify-center gap-2">
                <span>Learn More About Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="relative border border-primary/30 hover:border-primary/50 px-6 py-3 rounded-md shadow-sm bg-background/80 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-primary opacity-0 hover:opacity-10 transition-opacity rounded-md"></span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center justify-center group">
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
