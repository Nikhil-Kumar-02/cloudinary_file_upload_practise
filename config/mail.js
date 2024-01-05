const nodemailer = require('nodemailer');
require('dotenv').config();

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MY_EMAIL,
		pass: process.env.PASSWORD
	}
});

// let mailDetails = {
// 	from: 'xyz@gmail.com',
// 	to: 'abc@gmail.com',
// 	subject: 'Test mail',
// 	text: 'Node.js testing mail for GeeksforGeeks'
// };

const sendEmail = (req,res)=>{
    const mailDetails = {
        from: process.env.MY_EMAIL,
	    to: req.body.email,
	    subject: req.body.sub,
	    text: req.body.des
    }
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
            res.status(400).json({
                message : "mail not sent"
            })
        } else {
            console.log('Email sent successfully');
            res.status(200).json({
                message : "mail send sucessfully"
            })
        }
    });
    
}

module.exports = sendEmail;
