import {sendMessageToEmail, sendMessageToTelegram} from "../../utils/sendFeedback";


export const post = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    await sendMessageToTelegram(req.body)
        .catch(e =>
            sendMessageToEmail(req.body).catch(e => console.log(e))
        );


    const data = {
        status: "send"
    }

    res.end(JSON.stringify(data));
}