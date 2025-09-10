import { CheckCircle, Clock, DollarSign, Target } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo",
      description: "Libera a tu equipo de tareas repetitivas para enfocarse en lo estratégico"
    },
    {
      icon: DollarSign,
      title: "Reducción de costos",
      description: "Optimiza recursos y reduce gastos operativos hasta en un 30%"
    },
    {
      icon: CheckCircle,
      title: "Eliminación de errores",
      description: "Procesos automáticos que eliminan el error humano y aumentan la calidad"
    },
    {
      icon: Target,
      title: "Mayor eficiencia",
      description: "Flujos de trabajo optimizados que aceleran tus operaciones diarias"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Transformamos procesos en ventajas competitivas
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Identificamos oportunidades de automatización en tu empresa y las convertimos 
            en soluciones inteligentes que impulsan tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-card shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;