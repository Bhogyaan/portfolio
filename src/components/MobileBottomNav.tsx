
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Code, FolderOpen, Award, Mail, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

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
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-white/10 rounded-t-3xl mx-2 mb-2"
    >
      <div className="flex items-center justify-around py-2 px-2">
        {/* Navigation Items */}
        {navItems.slice(0, 3).map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-0 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon className="w-4 h-4 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-1 w-6 h-1 bg-primary rounded-full"
                />
              )}
            </motion.a>
          );
        })}

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 text-foreground/60 hover:text-foreground hover:bg-white/5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 mb-1" />
          ) : (
            <Moon className="w-4 h-4 mb-1" />
          )}
          <span className="text-xs font-medium">Theme</span>
        </motion.button>

        {/* Remaining Navigation Items */}
        {navItems.slice(3).map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          const actualIndex = index + 4; // Adjust for theme button
          
          return (
            <motion.a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-0 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: actualIndex * 0.1 }}
            >
              <Icon className="w-4 h-4 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-1 w-6 h-1 bg-primary rounded-full"
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
