
import { motion } from 'framer-motion';
import Typed from 'react-typed';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-portfolio-blue dark:text-portfolio-green">John Doe</span>
          </h1>
          <div className="h-16 md:h-20">
            <Typed
              strings={[
                'Full Stack Developer',
                'MERN Stack Expert',
                'UI/UX Enthusiast',
                'Problem Solver'
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
              className="text-2xl md:text-3xl lg:text-4xl text-portfolio-amber"
            />
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto my-8 text-foreground/80">
            I build beautiful, responsive, and user-friendly web applications using modern technologies.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-portfolio-blue text-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform"
            >
              Learn More About Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center justify-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
