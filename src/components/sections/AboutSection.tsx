
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Users, Coffee, Award, GraduationCap, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Technologies Mastered', value: '12+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
    { icon: Award, label: 'Years Experience', value: '3+' },
  ];

  const skills = [
    'React.js & Vue.js',
    'Flutter & Dart',
    'Node.js & Express',
    'MongoDB & MySQL',
    'Power BI Analytics',
    'UI/UX Design'
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span 
                className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >Me</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Passionate developer crafting innovative digital solutions with modern technologies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image - Reduced size */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full transform rotate-6"
                  whileHover={{ rotate: 12, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    filter: 'blur(8px)',
                    opacity: 0.7,
                  }}
                />
                <motion.div 
                  className="relative glass-card p-2 rounded-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div className="w-full aspect-square rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="NR Bhogyaan" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-3 -right-3 glass-card p-2 rounded-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Code className="w-5 h-5 text-primary" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-3 -left-3 glass-card p-2 rounded-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-accent" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Full Stack Developer & <span 
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  >Tech Enthusiast</span>
                </h3>
                <div className="space-y-3 text-base text-foreground/80">
                  <p>
                    Hello! I'm NR Bhogyaan, a passionate Computer Science postgraduate with expertise in 
                    MERN stack and Flutter development. Currently pursuing my Master's in Computer Applications 
                    at KLN College of Engineering.
                  </p>
                  <p>
                    I specialize in creating responsive web applications and cross-platform mobile apps, 
                    with hands-on experience in full-stack development, database management, and modern UI/UX design.
                  </p>
                  <p>
                    Currently interning at MindVision Technology, where I'm honing my skills in MERN stack 
                    development and contributing to innovative projects.
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Name</p>
                  <p className="font-semibold">NR Bhogyaan</p>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Location</p>
                  <p className="font-semibold flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Madurai, TN
                  </p>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Experience</p>
                  <p className="font-semibold">3+ Years</p>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">Status</p>
                  <p className="font-semibold text-green-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Available
                  </p>
                </motion.div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                      }}
                      className="glass-card px-3 py-2 rounded-lg text-sm font-medium cursor-pointer"
                      style={{
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a
                  href="/resume.pdf"
                  download="NR_Bhogyaan_Resume.pdf"
                  className="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center glass-card p-4 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
