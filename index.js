const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express();

require('./index');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }))
app.use(express.static( `${__dirname}/client/build` ) )

app.post('/api/form', (req, res) => {
	console.log(req.body)

nodemailer.createTestAccount((err, account) => {
	const htmlEmail = `
		<h3>Контактные данные</h3>
		<ul>
			<li>Имя: ${ req.body.name }</li>
			<li>Телефон: ${ req.body.phone }</li>
		</ul>
		<h3>Сообщение</h3>
		<p>${ req.body.message }</p>
	`

	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		secure: true,
		host: 'smtp.gmail.com',
		port: 465,
		auth: {
			user: process.env.SECRET_MAIL,
			pass: process.env.SECRET_PASS
		}
	})

	let mailOptions = {
		from: process.env.SECRET_MAIL,
		to: process.env.SECRET_RECEIVE,
		replyTo: process.env.SECRET_MAIL,
		subject: 'Новая заявка',
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


const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})
