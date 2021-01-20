import fetch from 'node-fetch';

const token = process.env.TOKEN_TELEGRAM;
const chatIdArray = [process.env.ADMIN_USER_TG];
const url = `https://api.telegram.org/bot${token}/sendMessage`;

const replacer = (str) => {
    return str.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
}

export const  sendMessageToTelegram = async (obj) => {
    const messageBody = `*Заявка с сайта*\n\n*Имя* : ${obj.name}\n*Компания * : ${obj.company}\n*Email* : ${obj.email}\n*Телефон* : ${obj.phone}\n*Cообщение* : ${obj.message}`;

    for (const chatId of chatIdArray) {
        const body = {
            "chat_id": chatId,
            "text": replacer(messageBody),
            "parse_mode": "MarkdownV2"
        };

        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        await response.json();
    }
};