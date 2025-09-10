import { Search, Wrench } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Consultoría inicial",
      subtitle: "Mapear procesos",
      description: "Analizamos tus operaciones actuales, identificamos cuellos de botella y oportunidades de automatización. Definimos el roadmap de transformación digital."
    },
    {
      number: "02", 
      icon: Wrench,
      title: "Implementación",
      subtitle: "Construcción de automatizaciones",
      description: "Desarrollamos e implementamos las soluciones automatizadas. Configuramos sistemas, integramos herramientas y capacitamos a tu equipo para el éxito."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Un proceso simple y efectivo que garantiza resultados tangibles en tiempo récord
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-primary opacity-30 z-0"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                <div className="flex-shrink-0 flex items-center gap-6">
                  <div className="text-6xl font-bold text-secondary/20">{step.number}</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-lg text-secondary font-medium mb-4">{step.subtitle}</p>
                  <p className="text-muted leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;