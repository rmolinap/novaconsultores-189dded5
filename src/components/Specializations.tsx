import { Truck, Calculator, Settings } from "lucide-react";

const Specializations = () => {
  const areas = [
    {
      icon: Truck,
      title: "Logística",
      slogan: "Logística ágil, conectada y sin errores",
      description: "Automatizamos cadenas de suministro, inventarios y distribución para una operación fluida y eficiente.",
      features: ["Gestión de inventarios", "Optimización de rutas", "Tracking en tiempo real"]
    },
    {
      icon: Calculator,
      title: "Finanzas",
      slogan: "Cuentas claras, procesos automáticos",
      description: "Transformamos la gestión financiera con automatización de facturación, reportes y análisis predictivos.",
      features: ["Facturación automática", "Reportes financieros", "Análisis de flujo de caja"]
    },
    {
      icon: Settings,
      title: "Operaciones",
      slogan: "Del papeleo al flujo digital en segundos",
      description: "Digitalizamos procesos operativos eliminando el trabajo manual y acelerando la toma de decisiones.",
      features: ["Flujos de aprobación", "Gestión documental", "Automatización de tareas"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Áreas de Especialización
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Dominamos las áreas críticas de tu negocio para maximizar el impacto de la automatización
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group border border-border hover:border-secondary/20"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 group-hover:scale-105 transition-transform duration-300">
                <area.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-2">{area.title}</h3>
              <p className="text-lg font-medium text-secondary mb-4 italic">"{area.slogan}"</p>
              <p className="text-muted mb-6 leading-relaxed">{area.description}</p>
              
              <ul className="space-y-2">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-muted">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;