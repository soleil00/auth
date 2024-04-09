import nodemailer from 'nodemailer';
export const sendEmailToUser = async (email: string) => {
    const transporter = nodemailer.createTransport({
        //@ts-ignore
        host:"smtp-relay.brevo.com",
        port:587,
        auth:{
          user:"emmanuelirumva1@gmail.com",
          pass:"xsmtpsib-117c79d312a8256eb845beb3d8112f28dab9766dbf3c79f973c9f3c94f682438-qfzK5xNhtgAs8ULS"
        }
   })
    const mailOptions  = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject:"Updated Email",
        text: "Well Your profile Updated Successfully"
    }
    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.response);
    } catch (error) {
    }
}
export default sendEmailToUser;
// module.exports = {sendEmailToUser}