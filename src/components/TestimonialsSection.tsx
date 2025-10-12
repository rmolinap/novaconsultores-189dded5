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

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-12 shadow-card hover:shadow-elegant transition-all duration-300 relative">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-secondary/20" />
            
            <blockquote className="text-muted mb-8 leading-relaxed text-xl">
              "{testimonials[0].quote}"
            </blockquote>
            
            <div className="border-t border-border pt-6">
              <div className="font-semibold text-primary text-lg">{testimonials[0].author}</div>
              <div className="text-muted">{testimonials[0].position}</div>
              <div className="text-secondary font-medium">{testimonials[0].company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;