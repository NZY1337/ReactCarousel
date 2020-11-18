/* eslint-disable consistent-return */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

const user = "a7eb9ce78fb6db";
const pass = "a49db7431f7575";


var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: user,
        pass: pass
    }
});

exports.contactForm = functions.https.onRequest((req, res) => {

    cors(req, res, () => {
        if (req.method !== 'POST') {
            return;
        }

        const email = req.body.email;
        const name = req.body.name;
        const message = req.body.message;

        sendContactForm(email, name, message);

        res.status(200).end();
        // or you can pass data to indicate success.
        res.status(200).send({ isEmailSend: true });
    })


})

async function sendContactForm(email, name, message) {
    try {
        const r = await transport.sendMail({
            from: `A message from ${name} `,
            to: email,
            subject: message,
            html: `
            <h1>hola ${name}, Gracias!</h1>
            <hr/>
            <p>${message}</p>
        `
        });
        return r;
    } catch (e) {
        return e;
    }
}

