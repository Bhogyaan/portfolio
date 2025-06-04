
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
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
                className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: '200% 200%',
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
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <motion.div
                className="w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                layoutId="contact-underline"
              />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download
              className="group px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
              <motion.div
                className="w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                layoutId="resume-underline"
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
            {[
              { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
              { icon: Mail, href: "mailto:alex@example.com", label: "Email", color: "hover:text-red-500" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full glass-card text-muted-foreground transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
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
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
