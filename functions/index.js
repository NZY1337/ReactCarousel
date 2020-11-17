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

exports.contactForm = functions.firestore.document('welcome/{id}').onCreate((snap, context) => {
    const email = snap.data().email;
    const name = snap.data().name;
    const message = snap.data().message;
    return sendContactForm(email, name, message);
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