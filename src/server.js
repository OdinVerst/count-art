import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { urlencoded, json } from "body-parser";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
        urlencoded({ extended: true }),
        json(),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
