import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Automatización inteligente de procesos"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/lovable-uploads/2c906cb0-98a3-481d-ae72-dafc62f2cc9e.png"
              alt="Nova Consultores Logo"
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-display text-white mb-2 leading-tight">
            Nova
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/80 mb-8 tracking-wide">
            CONSULTORES
          </p>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatización inteligente para crecer sin fricciones
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Agenda tu consultoría inicial
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-secondary">50%</h3>
              <p className="text-white/70">Menos tiempo en tareas repetitivas</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-secondary">95%</h3>
              <p className="text-white/70">Reducción de errores humanos</p>
            </div>
            <div className="space-y-2">
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