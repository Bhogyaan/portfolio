
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const HomeSection: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  const texts = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'React Specialist',
    'Problem Solver',
    'Innovation Driver'
  ];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32 md:pt-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute top-40 right-10 w-24 h-24 md:w-48 md:h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 75]) }}
          className="absolute bottom-40 left-1/3 w-16 h-16 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-5xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-block"
          >
            <div className="glass-card px-4 py-2 md:px-6 md:py-3 inline-flex items-center gap-2 glow-effect">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              Hi, I'm{' '}
              <motion.span 
                className="gradient-text block mt-1 md:mt-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Alex Morgan
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            variants={itemVariants} 
            className="h-16 md:h-20 flex items-center justify-center"
          >
            <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              <span className="text-accent">
                {displayText}
              </span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed px-4"
          >
            Crafting exceptional digital experiences with cutting-edge technologies. 
            I transform ideas into beautiful, functional, and scalable applications 
            that make a real difference.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4"
          >
            <motion.a
              href="#projects"
              className="group relative overflow-hidden glass-card px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-sm md:text-lg glow-effect w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 border border-white/20 rounded-2xl font-semibold text-sm md:text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 md:p-3 glass-card rounded-xl hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground/70 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center justify-center group">
            <span className="text-sm mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
              Discover More
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
