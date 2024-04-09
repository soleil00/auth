import nodemailer from 'nodemailer';
import env from '../environment/env';
export const sendEmailToUser = async (email: string) => {
    const transporter = nodemailer.createTransport({
        //@ts-ignore
        host:env.smtp_host,
        port:env.smtp_port,
        auth:{
          user:env.smtp_email,
          pass:env.smtp_pass
        }
   })
    const mailOptions  = {
        from:env.smtp_email,
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