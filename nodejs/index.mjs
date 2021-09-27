import express from 'express';

const app = express();
app.get('/:region(us-east-1|ap-northeast-1)', async function (req, res) {
	let body;
	try {
		body = await (await import('./test.mjs?' + Math.random())).invokeLambda(req.params.region);
	} catch (exception) {
		body = exception;
		console.error(exception);
	}
	res.send(body);
});
app.listen(80, '0.0.0.0');
