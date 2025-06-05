
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  gpa?: string;
  status?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Application",
    institution: "KLN College of Engineering",
    period: "2023 - 2025",
    location: "Tamil Nadu, India",
    status: "Currently Pursuing",
    description: "Specialized in advanced computer science concepts, software engineering, and modern development practices with focus on full-stack development and mobile applications.",
    achievements: [
      "MERN Stack Specialization",
      "Flutter Development Focus",
      "Data Analytics with Power BI",
      "Active Research Participation"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "KLN Arts and Science College",
    period: "2019 - 2022",
    location: "Tamil Nadu, India",
    description: "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, and web technologies.",
    achievements: [
      "Strong Foundation in Programming",
      "Web Development Projects",
      "Database Management",
      "Software Engineering Principles"
    ]
  }
];

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
              <span 
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >Education</span> & Learning
            </h2>
            <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              My academic journey in computer science and continuous learning path in technology.
            </p>
          </motion.div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 hidden sm:block opacity-60"></div>
            
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
                className={`relative flex flex-col mb-8 md:mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background z-10 hidden sm:block"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-4 lg:pr-8' : 'md:ml-auto md:pl-4 lg:pl-8'
                }`}>
                  <motion.div
                    className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer"
                    style={{
                      backdropFilter: 'blur(20px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 break-words">
                          {item.degree}
                        </h3>
                        <h4 className="text-base lg:text-lg font-semibold text-foreground/90 mb-3 break-words flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                          {item.institution}
                        </h4>
                      </div>
                      <motion.div 
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </motion.div>
                    </div>

                    {/* Status Badge */}
                    {item.status && (
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {item.status}
                      </motion.div>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 md:gap-4 mb-4 text-xs md:text-sm text-foreground/70">
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                      >
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-accent flex-shrink-0" />
                        <span className="break-words">{item.period}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                      >
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-accent flex-shrink-0" />
                        <span className="break-words">{item.location}</span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-primary text-sm md:text-base flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Highlights:
                      </h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.3 + achIndex * 0.1 }}
                            className="flex items-start gap-3 text-xs md:text-sm text-foreground/80"
                            whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="break-words">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
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
