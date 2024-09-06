import type { APIRoute } from "astro";
import { transporter } from "../../utils/mailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nombre = data.get("fullname");
  const tema = data.get("tema");
  const email = data.get("email");
  const tel = data.get("telefono");
  const msj = data.get("mensaje");

  const mailOptions = {
    from: import.meta.env.GMAIL_USER,
    to: import.meta.env.MAIL_TO,
    subject: "Nuevo contacto desde pagina web",
    text: `Los datos del formulario son 
      Nombre: ${nombre}
      Tema: ${tema}
      Email: ${email}
      Telefono: ${tel}
      Mensaje: ${msj}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.messageId);
    }
  });

  return new Response(
    JSON.stringify({
      message: "Missing required fields",
    }),
    { status: 400 }
  );
};
