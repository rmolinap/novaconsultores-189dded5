import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Nova Consultores transformó completamente nuestros procesos logísticos. Ahora tenemos visibilidad total de inventarios y hemos reducido errores en un 90%.",
      author: "María González",
      position: "Directora de Operaciones",
      company: "LogiTech México"
    },
    {
      quote: "La automatización de nuestros procesos financieros nos ha ahorrado 15 horas semanales y mejorado significativamente la precisión de nuestros reportes.",
      author: "Carlos Mendoza",
      position: "CFO",
      company: "Innovación Industrial"
    },
    {
      quote: "El proceso de consultoría fue excepcional. El equipo entendió perfectamente nuestras necesidades y entregó soluciones que superaron nuestras expectativas.",
      author: "Ana Patricia Ruiz",
      position: "Gerente General",
      company: "Distribuidora Del Norte"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Empresas que ya han transformado sus operaciones con nuestra ayuda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
              
              <blockquote className="text-muted mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-muted text-sm">{testimonial.position}</div>
                <div className="text-secondary font-medium text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;