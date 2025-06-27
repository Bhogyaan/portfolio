import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
  { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
  { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
];

const mobileSkills: Skill[] = [
  { name: "Flutter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg", color: "#02569B" },
  { name: "Dart", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg", color: "#00D4AA" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", color: "#000000" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", color: "#3776AB" },
  { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", color: "#777BB4" },
];

const databaseSkills: Skill[] = [
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
];

const toolsSkills: Skill[] = [
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", color: "#F05032" },
  { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "Canva", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg", color: "#00C4CC" },
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            My <span className="text-portfolio-blue dark:text-portfolio-green">Skills</span>
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Frontend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
                {frontendSkills.map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md p-3 mb-2">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Mobile Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8">
                {mobileSkills.map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md p-3 mb-2">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Backend Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
                {backendSkills.map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md p-3 mb-2">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Database & SQL</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
                {databaseSkills.map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md p-3 mb-2">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Tools & Design</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
                {toolsSkills.map((skill, index) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md p-3 mb-2">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
