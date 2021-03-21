import fetch from 'node-fetch';
import https from 'https';
import nodemailer from 'nodemailer';

const token = process.env.TOKEN_TELEGRAM;
const chatId = process.env.ADMIN_USER_TG; //process.env.SECOND_USER_TG
const url = `https://api.telegram.org/bot${token}/sendMessage`;

const replacer = (str) => {
    return str.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
}

export const sendMessageToTelegram = async (obj) => {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: true,
    });

    const messageBody = `*Заявка с сайта*\n\n*Имя* : ${obj.name}\n*Компания * : ${obj.company}\n*Email* : ${obj.email}\n*Телефон* : ${obj.phone}\n*Cообщение* : ${obj.message}`;

    const body = {
        "chat_id": chatId,
        "text": replacer(messageBody),
        "parse_mode": "MarkdownV2"
    };

    return await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
        agent: httpsAgent
    });
};

export const sendMessageToEmail = async (obj) => {
    const messageBody = `<h1>Заявка с сайта</h1><br>
        <b>Имя</b> : ${obj.name}<br>
        <b>Компания</b> : ${obj.company}<br>
        <b>Email</b> : ${obj.email}<br>
        <b>Телефон</b> : ${obj.phone}<br>
        <b>Cообщение</b> : ${obj.message}`;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_ACC, // generated ethereal user
            pass: process.env.MAIL_TOKEN, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: `"Заявка CountArt.ru" ${process.env.GMAIL_ACC}`, // sender address
        to: "grafcorp01@gmail.com, fourpelican@gmail.com", // list of receivers
        subject: "Заявка с CountArt", // Subject line
        html: messageBody, // html body
    });

    console.log("Message sent: %s", info.messageId);
};