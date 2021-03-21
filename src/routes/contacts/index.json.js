import {sendMessageToEmail, sendMessageToTelegram} from "../../utils/sendFeedback";


export const post = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    sendMessageToTelegram(req.body).catch(e => console.log(e));
    sendMessageToEmail(req.body).catch(e => console.log(e))

    const data = {
        status: "send"
    }
    res.end(JSON.stringify(data));
}