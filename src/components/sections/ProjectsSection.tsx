
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Smartphone, Globe, Users, Database } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  category: string;
  status: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Blog Web Application",
    description: "A comprehensive blog platform built with React and Node.js featuring CRUD operations, real-time comment updates, user authentication, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    links: {
      demo: "https://blog-app.example.com",
      github: "https://github.com/bhogyaannr/blog-app"
    },
    category: "Full Stack",
    status: "Completed"
  },
  {
    title: "Car Rental Services Platform",
    description: "A responsive car rental website with real-time data integration using PHP backend. Features include vehicle browsing, booking system, and cross-browser compatibility.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    links: {
      demo: "https://car-rental.example.com",
      github: "https://github.com/bhogyaannr/car-rental"
    },
    category: "Frontend",
    status: "Completed"
  },
  {
    title: "Quiz Management Platform",
    description: "An interactive quiz platform with timed questions, automated grading system, and real-time features. Collaborative project with seamless frontend-backend integration.",
    image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "PHP", "MySQL", "JavaScript", "CSS3"],
    links: {
      demo: "https://quiz-platform.example.com",
      github: "https://github.com/bhogyaannr/quiz-platform"
    },
    category: "Frontend",
    status: "Completed"
  },
  {
    title: "College Management System",
    description: "A comprehensive Flutter-based mobile application for college management featuring student information system, attendance tracking, and administrative tools with modern UI design.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite", "Provider"],
    links: {
      github: "https://github.com/bhogyaannr/college-management"
    },
    category: "Mobile App",
    status: "In Development"
  }
];

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return Database;
      case 'Frontend':
        return Globe;
      case 'Mobile App':
        return Smartphone;
      default:
        return Globe;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/20';
      case 'In Development':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              My <span 
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >Projects</span>
            </h2>
            <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Showcase of innovative solutions and creative implementations across web and mobile platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer group"
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="flex justify-center py-6 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        <CategoryIcon className="w-3 h-3" />
                        {project.category}
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`absolute top-3 right-3 flex items-center gap-2 px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {project.status}
                      </div>

                      <motion.div 
                        className="relative w-32 h-32 md:w-40 md:h-40"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                        />
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.05 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <motion.h3 
                      className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4 md:mb-6 flex flex-wrap gap-1.5 md:gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-medium transition-all duration-300"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: 'hsl(var(--primary) / 0.2)',
                            y: -2
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-lg"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-lg"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: '#374151',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/bhogyaannr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
