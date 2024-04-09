import nodemailer from 'nodemailer';
export const sendEmailToUser = async (email: string) => {
    const transporter = nodemailer.createTransport({
        //@ts-ignore
        host:"",
        port:"",
        auth:{
          user:"",
          pass:""
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