import { motion } from 'framer-motion';
import { Github, Instagram, Twitter, Mail, Phone, MapPin, Heart, Linkedin } from 'lucide-react';
import { socialLinks } from "@/lib/socialLinks";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
              N R Bhogyaan
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md leading-relaxed text-sm">
              MERN Stack Developer passionate about creating responsive, user-friendly web applications with modern technologies and clean code.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Mail className="w-4 h-4 text-primary" />
                <span>bhogyaannr@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 8870750574</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${link.color ? link.color : ''}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" style={link.brandColor ? { color: link.brandColor } : {}} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="space-y-1">
              {["React.js", "Vue.js", "Flutter", "Node.js", "MongoDB", "Python"].map((skill, index) => (
                <div key={skill} className="text-sm text-foreground/70">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/50 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              © {currentYear} N R Bhogyaan. All rights reserved.
            </p>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
