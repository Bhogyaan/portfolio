
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  image: string;
  verificationLink?: string;
}

const certificates: Certificate[] = [
  {
    title: "MongoDB Developer Certification",
    organization: "MongoDB University",
    date: "August 2022",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    verificationLink: "https://example.com/verify/mongodb"
  },
  {
    title: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    date: "March 2022",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    verificationLink: "https://example.com/verify/aws"
  },
  {
    title: "React - The Complete Guide",
    organization: "Udemy",
    date: "January 2021",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    verificationLink: "https://example.com/verify/react"
  }
];

const CertificatesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            My <span className="text-portfolio-blue dark:text-portfolio-green">Certificates</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">{certificate.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/80">{certificate.organization}</span>
                    <span className="text-sm text-portfolio-amber">{certificate.date}</span>
                  </div>
                  {certificate.verificationLink && (
                    <a
                      href={certificate.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-blue dark:text-portfolio-green text-sm inline-flex items-center mt-2 hover:underline"
                    >
                      Verify Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
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
