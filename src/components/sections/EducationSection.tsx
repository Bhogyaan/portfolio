
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2018 - 2020",
    location: "Stanford, CA",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning algorithms and neural networks.",
    achievements: [
      "Magna Cum Laude Graduate",
      "Research Assistant in AI Lab",
      "Published 3 Research Papers"
    ],
    gpa: "3.9/4.0"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University of California, Berkeley",
    period: "2014 - 2018",
    location: "Berkeley, CA", 
    description: "Comprehensive study of computer science fundamentals with emphasis on software engineering and web technologies.",
    achievements: [
      "Dean's List - 6 Semesters",
      "President of Tech Club",
      "Winner of Hackathon 2017"
    ],
    gpa: "3.8/4.0"
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "App Academy",
    period: "2013 - 2014",
    location: "San Francisco, CA",
    description: "Intensive program covering modern web development technologies including MERN stack and best practices.",
    achievements: [
      "Top 5% of Cohort",
      "Led Team Projects",
      "100% Job Placement Rate"
    ]
  },
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
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
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
              <span className="gradient-text">Education</span> & Qualifications
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and innovation.
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>
            
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
                className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="glass-card p-8 rounded-2xl glow-effect magnetic-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">
                          {item.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-foreground/90 mb-3">
                          {item.institution}
                        </h4>
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl ml-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{item.location}</span>
                      </div>
                      {item.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span>GPA: {item.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-primary">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.3 + achIndex * 0.1 }}
                            className="flex items-center gap-3 text-sm text-foreground/80"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {achievement}
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
