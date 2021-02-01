import {sendMessageToTelegram} from "../../utils/sendFeedback";


export const post = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json'
    });
	sendMessageToTelegram(req.body);
	res.end('send');
}