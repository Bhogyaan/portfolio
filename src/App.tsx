import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import PortfolioPage from "@/pages/PortfolioPage";
import NotFound from "@/pages/NotFound";

// Create a client for React Query
const queryClient = new QueryClient();

const App = () => {
  // Show loading screen for 1.5s only on full page reload (refresh)
  const getShouldShowLoading = () => {
    if (typeof window === 'undefined') return false;
    const reloaded = sessionStorage.getItem('reloaded');
    if (reloaded === 'true') {
      sessionStorage.removeItem('reloaded');
      return true;
    }
    return false;
  };
  const [loading, setLoading] = useState(getShouldShowLoading);
  const location = useLocation();

  // Set a flag on refresh (page unload)
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('reloaded', 'true');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (loading) {
      // Show loading screen for 1.5 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner richColors closeButton position="top-right" />
          <AnimatePresence mode="wait">
            {(loading && location.pathname !== "/404") ? (
              <motion.div
                key="loading"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LoadingScreen onComplete={() => setLoading(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen"
              >
                <Routes>
                  <Route path="/" element={<PortfolioPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
