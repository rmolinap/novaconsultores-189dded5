import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import Specializations from "@/components/Specializations";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans scroll-smooth">
      <HeroSection />
      <div className="animate-fade-in">
        <ValueProposition />
      </div>
      <div className="animate-fade-in">
        <Specializations />
      </div>
      <div className="animate-fade-in">
        <ProcessSection />
      </div>
      <div className="animate-fade-in">
        <TestimonialsSection />
      </div>
      <div className="animate-fade-in">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
