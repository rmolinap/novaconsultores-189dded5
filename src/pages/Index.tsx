import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import Specializations from "@/components/Specializations";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HeroSection />
      <ValueProposition />
      <Specializations />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
