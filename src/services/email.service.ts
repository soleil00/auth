const nodemailer= require("nodemailer");

const transporter = nodemailer.createTransport({
  host:"smtp-relay.brevo.com",
  port:587,
  auth:{
    user:"emmanuelirumva1@gmail.com",
    pass:"xsmtpsib-117c79d312a8256eb845beb3d8112f28dab9766dbf3c79f973c9f3c94f682438-qfzK5xNhtgAs8ULS"
  }
})

const sendEmail = async (email) =>{
  const mailOptions = {
    from: "emmanuelirumva1@gmail.com",
    to: email,
    subject:"User Profile Update",
    text:"Well, your profile updated successfully",

  }
  try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info.response)
    
  } catch (error) {
    console.log(error)
    
  }
  
}

module.exports = sendEmail