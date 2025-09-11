import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para automatizar tu empresa?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">Agenda tu consulta inicial y descubre cómo podemos transformar tus procesos en ventajas competitivas que impulsen tu crecimiento.</p>

          <div className="mb-12">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Agenda tu consultoría inicial
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Llámanos</p>
                <p className="text-white font-medium">+52 (55) 1234-5678</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Escríbenos</p>
                <p className="text-white font-medium">hola@novaconsultores.mx</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Consulta inicial</p>
                <p className="text-white font-medium">Empieza a transformar tu negocio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;