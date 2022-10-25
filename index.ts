import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT ?? 8000;

interface apiObject {
	ok: boolean,
	msg: string
}

app.get('/', (_req, res) => {
  res.send('Hola Backend en Typescript');
});

app.get('/api', (_req, res) => {

	const apiStatus: apiObject = {
		ok: true,
		msg: 'Todo esta bien, no se ha caido el backend',
	}

  res.status(200).json({
		...apiStatus
  });
});

app.get('*', (_req, res) => {
	res.status(404).send('Not found')
})


app.listen(port, () => {
  console.log(`⚡️[server]: running in http://localhost:${port}`);
});
