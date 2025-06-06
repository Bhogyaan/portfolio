import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Instagram, Twitter, Send, Linkedin } from 'lucide-react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactInfoItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<any>;
  url: string;
  color: string;
}

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhogyaannr@gmail.com',
      href: 'mailto:bhogyaannr@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8870750574',
      href: 'tel:+918870750574'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Madurai, Tamil Nadu, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/bhogyaannr",
      color: "hover:bg-gray-600 hover:text-white"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/in/bhogyaannr",
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/bhogyaannr",
      color: "hover:bg-pink-500 hover:text-white"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com/bhogyaannr",
      color: "hover:bg-blue-500 hover:text-white"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 glass-card p-4 rounded-xl transition-all duration-300 hover:shadow-lg group"
                      style={{
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wide">{info.label}</p>
                        <p className="font-semibold text-foreground break-all">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl glass-card transition-all duration-300 ${link.color}`}
                      style={{
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 }}
                className="glass-card p-6 rounded-xl"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h4 className="font-semibold mb-2">Let's Work Together!</h4>
                <p className="text-sm text-foreground/70">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full p-4 glass-card rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      style={{ backdropFilter: 'blur(20px)' }}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full p-4 glass-card rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      style={{ backdropFilter: 'blur(20px)' }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full p-4 glass-card rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    style={{ backdropFilter: 'blur(20px)' }}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full p-4 glass-card rounded-xl border border-white/20 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                    style={{ backdropFilter: 'blur(20px)' }}
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full glass-card p-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={{
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
