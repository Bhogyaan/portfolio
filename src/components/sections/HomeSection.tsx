import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Github, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import { socialLinks } from "@/lib/socialLinks";

const HomeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/90 to-background"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-20" ref={ref}>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                N R Bhogyaan
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80"
            >
              MERN Stack Developer & Tech Enthusiast
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions with React.js, Vue.js, and Flutter. 
            Currently pursuing Master's in Computer Applications at KLN College of Engineering with 8.1 CGPA and interning at MindVision Technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="glass-card px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="/NR_BHOGYAAN.pdf"
              download="NR_BHOGYAAN.pdf"
              className="glass-card px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center gap-3"
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-4 pt-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl glass-card transition-all duration-300 ${link.color ? link.color : ''}`}
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" style={link.brandColor ? { color: link.brandColor } : {}} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator - now directly below social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-8"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-foreground/60 hover:text-foreground transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
