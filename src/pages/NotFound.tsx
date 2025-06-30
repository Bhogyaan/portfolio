import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ContactSection from "@/components/sections/ContactSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-foreground/70 mb-6">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline text-lg">
          Return to Home
        </a>
      </div>
      <div className="w-full max-w-3xl mx-auto px-4 pb-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default NotFound;
