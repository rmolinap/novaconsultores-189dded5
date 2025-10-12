import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <img
              src="/lovable-uploads/2c906cb0-98a3-481d-ae72-dafc62f2cc9e.png"
              alt="Nova Consultores Logo"
              className="w-48 h-48 mx-auto mb-8 hover-scale"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatización inteligente para crecer sin fricciones
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 hover-scale"
              onClick={() => navigate("/appointment")}
            >
              Agenda tu consultoría inicial
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in">
            <div className="space-y-2 hover-scale">
              <h3 className="text-3xl font-bold text-secondary">50%</h3>
              <p className="text-white/70">Menos tiempo en tareas repetitivas</p>
            </div>
            <div className="space-y-2 hover-scale">
              <h3 className="text-3xl font-bold text-secondary">95%</h3>
              <p className="text-white/70">Reducción de errores humanos</p>
            </div>
            <div className="space-y-2 hover-scale">
              <h3 className="text-3xl font-bold text-secondary">30%</h3>
              <p className="text-white/70">Ahorro en costos operativos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;