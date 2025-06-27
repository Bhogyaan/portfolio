import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Sparkles, Home, User, GraduationCap, Code, Briefcase, Award, Mail } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: any;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Determine which section is currently in view
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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 mx-2 lg:mx-4 mt-2 lg:mt-4 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-800/50' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4 max-w-7xl">
        {/* Logo - Fixed width to prevent layout shift */}
        <motion.button 
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 text-lg lg:text-xl font-bold font-space-grotesk z-50 group bg-transparent border-none cursor-pointer min-w-[140px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="p-2 rounded-xl text-white flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
            }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
          </motion.div>
          <span
            className="truncate"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            N R Bhogyaan
          </span>
        </motion.button>

        {/* Desktop Navigation - Improved responsiveness */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-4">
          <div 
            className="flex items-center gap-1 p-2 rounded-full overflow-hidden"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '100%',
            }}
          >
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button 
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm flex items-center gap-2 bg-transparent border-none cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      activeSection === item.href.substring(1) 
                        ? 'text-white' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <IconComponent className="w-4 h-4 relative z-10 flex-shrink-0" />
                    <span className="relative z-10 hidden xl:inline">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-3 min-w-[100px] justify-end">
          {/* Theme Toggle */}
          <motion.button 
            onClick={toggleTheme} 
            className="relative p-3 rounded-full transition-all duration-300 group overflow-hidden bg-transparent border-none cursor-pointer"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary))/20%, hsl(var(--accent))/20%)',
              }}
            />
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Moon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Sun className="w-5 h-5" style={{ color: 'hsl(var(--accent))' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative p-3 rounded-full transition-all duration-300 group overflow-hidden bg-transparent border-none cursor-pointer"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary))/20%, hsl(var(--accent))/20%)',
              }}
            />
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/10 rounded-b-3xl mx-2 overflow-hidden shadow-xl"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 group relative overflow-hidden bg-transparent border-none cursor-pointer ${
                      activeSection === item.href.substring(1)
                        ? 'text-white'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    style={{
                      position: 'relative',
                    }}
                  >
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeMobileTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <IconComponent className="w-5 h-5 relative z-10 flex-shrink-0" />
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
