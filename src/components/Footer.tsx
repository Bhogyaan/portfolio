
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
  const socialLinks = [
    { name: "GitHub", icon: "github", url: "https://github.com/johndoe" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/johndoe" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com/johndoe" }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="col-span-1 md:col-span-1" variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-4 text-gradient">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              A professional web developer specializing in MERN stack development, creating beautiful and functional web applications.
            </p>
          </motion.div>
          
          <motion.div className="col-span-1 md:col-span-1" variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="col-span-1 md:col-span-1" variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                New York, USA
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                john.doe@example.com
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 234 567 890
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div className="col-span-1 md:col-span-1" variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Social Media
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover-lift glow"
                  style={{ 
                    backgroundColor: link.icon === 'github' 
                      ? '#333' 
                      : link.icon === 'linkedin' 
                        ? '#0077B5' 
                        : '#1DA1F2' 
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {link.icon === "github" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                    {link.icon === "linkedin" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {link.icon === "twitter" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {year} John Doe. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
