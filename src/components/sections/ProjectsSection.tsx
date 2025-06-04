
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    links: {
      demo: "https://ecommerce.example.com",
      github: "https://github.com/johndoe/ecommerce"
    }
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with real-time updates and collaboration features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    links: {
      demo: "https://taskapp.example.com",
      github: "https://github.com/johndoe/taskapp"
    }
  },
  {
    title: "Real-Time Chat Application",
    description: "A messaging platform with real-time communication, user presence indicators, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    links: {
      demo: "https://chatapp.example.com",
      github: "https://github.com/johndoe/chatapp"
    }
  },
  {
    title: "Personal Finance Tracker",
    description: "An application for tracking personal finances, expenses, income, and generating reports with data visualization.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Redux"],
    links: {
      demo: "https://finance.example.com",
      github: "https://github.com/johndoe/finance"
    }
  }
];

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Showcase of innovative solutions and creative implementations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl overflow-hidden shadow-xl glow-effect magnetic-hover"
              >
                <div className="relative overflow-hidden">
                  <div className="flex justify-center py-6 bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl transition-transform hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 md:mb-6 flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
