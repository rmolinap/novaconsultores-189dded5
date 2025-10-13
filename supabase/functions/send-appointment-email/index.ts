import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentEmailRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, date, message }: AppointmentEmailRequest = await req.json();

    console.log("Processing appointment email for:", email);

    // Send confirmation email to the client
    const clientEmailResponse = await resend.emails.send({
      from: "Nova Automation <onboarding@resend.dev>",
      to: [email],
      subject: "Confirmación de Consultoría - Nova Automation",
      html: `
        <h1>¡Gracias por agendar tu consultoría, ${name}!</h1>
        <p>Hemos recibido tu solicitud con la siguiente información:</p>
        <ul>
          <li><strong>Fecha preferida:</strong> ${date}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          ${message ? `<li><strong>Mensaje:</strong> ${message}</li>` : ''}
        </ul>
        <p>Nos pondremos en contacto contigo pronto para confirmar tu cita.</p>
        <p>Saludos,<br>El equipo de Nova Automation</p>
      `,
    });

    console.log("Client email sent successfully:", clientEmailResponse);

    // Send notification email to Nova Automation
    // TODO: Replace with your actual email address
    const notificationEmailResponse = await resend.emails.send({
      from: "Nova Automation <onboarding@resend.dev>",
      to: ["info@novaconsultores.mx"],
      subject: `Nueva Solicitud de Consultoría - ${name}`,
      html: `
        <h1>Nueva solicitud de consultoría</h1>
        <p>Se ha recibido una nueva solicitud de consultoría con los siguientes datos:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Fecha preferida:</strong> ${date}</li>
          ${message ? `<li><strong>Mensaje:</strong> ${message}</li>` : ''}
        </ul>
      `,
    });

    console.log("Notification email sent successfully:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
