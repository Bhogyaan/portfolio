
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail, Phone, Instagram, Twitter } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const HomeSection = () => {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/bhogyaannr", 
      label: "GitHub", 
      color: "text-gray-800 dark:text-gray-200"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/bhogyaannr", 
      label: "Instagram", 
      color: "text-pink-600 dark:text-pink-400"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/bhogyaannr", 
      label: "Twitter", 
      color: "text-blue-600 dark:text-blue-400"
    },
    { 
      icon: Phone, 
      href: "tel:+918870750574", 
      label: "Phone", 
      color: "text-green-600 dark:text-green-400"
    },
    { 
      icon: Mail, 
      href: "mailto:bhogyaannr@gmail.com", 
      label: "Email", 
      color: "text-red-600 dark:text-red-400"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-space-grotesk text-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="inline-block relative"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                N R Bhogyaan
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-2 text-muted-foreground"
            >
              Front End Developer & MERN Stack Developer
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground/80 mb-4"
            >
              Building innovative web & mobile solutions with modern technologies
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground/70"
            >
              📍 Madurai, TN | 📧 bhogyaannr@gmail.com | 📱 +91 8870750574
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => handleSmoothScroll('contact')}
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 overflow-hidden text-white border-none cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download="NR_Bhogyaan_Resume.pdf"
              className="group relative px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 overflow-hidden text-white no-underline"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center items-center gap-6 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl transition-all duration-300 no-underline glass-card hover:shadow-xl"
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className={`w-6 h-6 transition-colors duration-300 ${social.color} group-hover:scale-110`} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={() => handleSmoothScroll('about')}
              className="flex flex-col items-center gap-2 transition-colors group cursor-pointer bg-transparent border-none text-muted-foreground hover:text-foreground"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                whileHover={{ color: 'hsl(var(--primary))' }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown className="w-5 h-5 transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
