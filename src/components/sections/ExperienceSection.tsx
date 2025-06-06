
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Users } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  type: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Front End Developer Intern",
    company: "Mind Vision Technologies",
    period: "Jan 2025 - Jun 2025",
    location: "Madurai, TN",
    type: "Internship",
    description: "Focused on developing responsive user interfaces and modernizing legacy codebases using React.js and Vue.js frameworks.",
    achievements: [
      "Developed 10+ responsive user interfaces using React.js and Vue.js, boosting user engagement by 30% and reducing load times by 15%",
      "Refactored 15+ legacy jQuery modules into modular Vue components and React hooks, reducing code duplication by 40%",
      "Integrated 5+ RESTful and GraphQL APIs, enhancing data fetching and lowering API latency by 25%",
      "Engineered a responsive quiz platform using adaptive CSS grid layouts, ensuring optimal user experience across 12+ device types with 90% satisfaction rating"
    ]
  }
];

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto relative z-10 px-4" ref={ref}>
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
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Work <span 
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >Experience</span>
            </h2>
            <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              Professional journey and hands-on experience in front-end development and modern web technologies.
            </p>
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
                className="relative mb-8 md:mb-16 last:mb-0"
              >
                {/* Content Card */}
                <motion.div
                  className="glass-card p-6 md:p-8 lg:p-10 rounded-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 break-words">
                        {item.title}
                      </h3>
                      <h4 className="text-lg lg:text-xl font-semibold text-foreground/90 mb-3 break-words flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                        {item.company}
                      </h4>
                    </div>
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-2xl flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Code className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </motion.div>
                  </div>

                  {/* Type Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-3 h-3" />
                    {item.type}
                  </motion.div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-6 mb-6 text-sm md:text-base text-foreground/70">
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                    >
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="break-words font-medium">{item.period}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                    >
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="break-words font-medium">{item.location}</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-foreground/80 mb-6 md:mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-primary text-base md:text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.3 + achIndex * 0.1 }}
                          className="flex items-start gap-4 text-sm md:text-base text-foreground/80 leading-relaxed"
                          whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="break-words">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
