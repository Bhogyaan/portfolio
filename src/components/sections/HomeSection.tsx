
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

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
      href: "https://github.com", 
      label: "GitHub", 
      hoverColor: "#333",
      darkHoverColor: "#fff"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn", 
      hoverColor: "#0077b5",
      darkHoverColor: "#0077b5"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com", 
      label: "Twitter", 
      hoverColor: "#1da1f2",
      darkHoverColor: "#1da1f2"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      label: "Instagram", 
      hoverColor: "#e4405f",
      darkHoverColor: "#e4405f"
    },
    { 
      icon: Mail, 
      href: "mailto:alex@example.com", 
      label: "Email", 
      hoverColor: "#ea4335",
      darkHoverColor: "#ea4335"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(220 14.3% 97%) 100%)',
        ...(document.documentElement.classList.contains('dark') && {
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(240 10% 6%) 100%)',
        }),
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl"
        style={{
          background: 'hsl(var(--primary) / 0.1)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl"
        style={{
          background: 'hsl(var(--accent) / 0.1)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-space-grotesk"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="inline-block"
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
                Alex Morgan
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-2"
            >
              Full Stack Developer
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground/80"
            >
              Building digital experiences with passion and precision
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
              className="group relative px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                color: 'white',
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
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                color: 'white',
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
                className="absolute inset-0 bg-white/20"
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
                className="group relative p-3 rounded-full transition-all duration-300"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'hsl(var(--muted-foreground))',
                }}
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                onHoverStart={() => {
                  // Dynamic hover color change
                  const element = document.querySelector(`[aria-label="${social.label}"]`);
                  if (element) {
                    element.style.color = social.hoverColor;
                  }
                }}
                onHoverEnd={() => {
                  const element = document.querySelector(`[aria-label="${social.label}"]`);
                  if (element) {
                    element.style.color = 'hsl(var(--muted-foreground))';
                  }
                }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 transition-colors duration-300" />
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
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer bg-transparent border-none"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown 
                className="w-5 h-5 group-hover:text-primary transition-colors" 
                style={{
                  color: 'inherit',
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
