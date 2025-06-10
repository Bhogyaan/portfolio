import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";

interface Certificate {
  title: string;
  organization: string;
  date: string;
}

const certificates: Certificate[] = [
  {
    title: "Python",
    organization: "Besant Technologies",
    date: "2024",
  },
  {
    title: "Web Development Course",
    organization: "Udemy",
    date: "2022",
  },
  {
    title: "React.js Workshop",
    organization: "Tech Conference",
    date: "2024",
  },
  {
    title: "Power BI Workshop",
    organization: "Microsoft",
    date: "2024",
  },
  {
    title: "MERN Stack Workshop",
    organization: "Developer Community",
    date: "2024",
  },
];

const CertificatesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Certifications <span className="gradient-text">& Training</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Continuous learning through professional certifications and specialized training programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-5  w-90">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-background/30 backdrop-blur-lg border border-background/60 h-70 cursor-pointer"
              >
                <div className="p-3 h-48 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-end mb-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground break-words">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-foreground/60 break-words">
                      {certificate.organization}
                    </p>
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {certificate.date}
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

export default CertificatesSection;
