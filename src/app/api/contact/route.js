import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, service, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Message from ${name}`,
            html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        return Response.json({
            success: true,
        }, { status: 200 });
    } catch (err) {
        return Response.json({
            success: false,
            error: err.message,
        }, { status: 500 });
    }
}