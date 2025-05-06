
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Worked on projects involving deep learning and natural language processing."
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "MIT",
    period: "2014 - 2018",
    description: "Graduated with honors. Core subjects included Data Structures, Algorithms, Database Management, and Web Development."
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Coding Academy",
    period: "2013",
    description: "Intensive 12-week program focused on MERN stack development (MongoDB, Express.js, React, Node.js)."
  },
];

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="text-portfolio-blue dark:text-portfolio-green">Education</span> & Qualifications
          </h2>
          
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-portfolio-blue dark:bg-portfolio-green"></div>
            
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 pb-10"
              >
                {/* Circle marker */}
                <div className="absolute left-0 top-1.5 w-16 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-4 border-portfolio-blue dark:border-portfolio-green bg-white dark:bg-gray-800"></div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold text-portfolio-blue dark:text-portfolio-green mb-2">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap justify-between mb-4">
                    <span className="text-foreground/80 font-medium">{item.institution}</span>
                    <span className="text-portfolio-amber font-medium">{item.period}</span>
                  </div>
                  <p className="text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
