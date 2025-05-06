
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding py-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            About <span className="text-portfolio-blue dark:text-portfolio-green">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-portfolio-blue dark:bg-portfolio-green rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Profile" 
                  className="w-full h-auto rounded-2xl relative z-10 border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                Full Stack <span className="text-portfolio-amber">MERN Developer</span>
              </h3>
              <p className="text-foreground/80">
                Hello! I'm John Doe, a passionate Full Stack Developer with expertise in the MERN stack. 
                I have a strong foundation in building scalable and efficient web applications using modern technologies.
              </p>
              <p className="text-foreground/80">
                With 5+ years of experience in web development, I've worked on various projects ranging from small business websites 
                to complex enterprise applications. I'm dedicated to creating user-friendly interfaces and robust backend solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p>John Doe</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>john.doe@example.com</p>
                </div>
                <div>
                  <p className="font-semibold">From:</p>
                  <p>New York, USA</p>
                </div>
                <div>
                  <p className="font-semibold">Availability:</p>
                  <p>Freelance/Full-time</p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume.pdf"
                  download="JohnDoe_Resume.pdf"
                  className="inline-block px-6 py-3 bg-portfolio-blue text-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
