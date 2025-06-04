
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Code, FolderOpen, Award, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-card border-t border-white/10 rounded-t-3xl mx-2 mb-2 shadow-2xl"
    >
      <div className="flex items-center justify-around py-3 px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-0 relative ${
                isActive 
                  ? 'text-primary' 
                  : 'text-foreground/60 hover:text-foreground'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-1 w-8 h-1 bg-primary rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileBottomNav;
