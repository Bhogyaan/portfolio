
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Users, Coffee, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
    { icon: Award, label: 'Years Experience', value: '5+' },
  ];

  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js & Python',
    'UI/UX Design',
    'Cloud Architecture',
    'DevOps & CI/CD'
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Passionate developer with a mission to create digital experiences that inspire and engage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl transform rotate-6 glow-effect"></div>
                <div className="relative glass-card p-2 rounded-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Alex Morgan" 
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl floating-element">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl floating-element" style={{ animationDelay: '2s' }}>
                  <Award className="w-6 h-6 text-accent" />
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Full Stack Developer & <span className="gradient-text">Creative Thinker</span>
                </h3>
                <div className="space-y-4 text-lg text-foreground/80">
                  <p>
                    Hello! I'm Alex Morgan, a passionate full stack developer with over 5 years of experience 
                    crafting digital solutions that bridge the gap between imagination and reality.
                  </p>
                  <p>
                    My journey began with a curiosity about how things work, which evolved into a deep love for 
                    creating seamless user experiences backed by robust, scalable architectures.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                    or mentoring aspiring developers in the community.
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Name</p>
                  <p className="font-semibold">Alex Morgan</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Location</p>
                  <p className="font-semibold">San Francisco, CA</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Experience</p>
                  <p className="font-semibold">5+ Years</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">Availability</p>
                  <p className="font-semibold text-green-400">Available</p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Core Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="glass-card px-4 py-2 rounded-xl text-sm font-medium"
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
                  download="Alex_Morgan_Resume.pdf"
                  className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-xl font-semibold glow-effect hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center glass-card p-6 rounded-2xl glow-effect magnetic-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
