const express = require('express') 
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }))

app.post('/api/form', (req, res) => {
	//console.log(req.body)
	
nodemailer.createTestAccount((err, account) => {
	const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${ req.body.name }</li>
			<li>Phone: ${ req.body.phone }</li>
		</ul>
		<h3>Message</h3>
		<p>${ req.body.message }</p>
	`		
	 
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'l7dgnhad7rppr53q@ethereal.email',
			pass: 'E2cBQPHZWBNHmjwRdB'
		}
	})
	
	let mailOptions = {
		from: 'test@testaccount.com',
		to: 'l7dgnhad7rppr53q@ethereal.email',
		replyTo: 'test@testaccount.com',
		subject: 'New Message',
		text: req.body.message,
		html: htmlEmail
	}
	
	transporter.sendMail(mailOptions, (err, info) => {
		if (!err) {
			return console.log(err)
		} 
		
		console.log('Message sent: %s', req.body.message)
		console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
	})
}) 

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
})
































