const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/form', (req, res, next) => {
    nodemailer.createTestAccount().then(acc => {
        return nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: acc.user, // generated ethereal user
                pass: acc.pass, // generated ethereal password
            },
        });
    }).then(transport => {
        return transport.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: req.body.email, // list of receivers
            subject: `You got message from ${req.body.name}`, // Subject line
            text: req.body.message,
            html: '<h1>Hello!</h1>' // html body
        })
    }).then(info => {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.redirect('/');
    })
});
app.listen(PORT);