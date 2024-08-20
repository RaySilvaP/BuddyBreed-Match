import 'dotenv/config';
import express, {Request, Response} from 'express';

const app = express();
const port = process.env.PORT

app.get('/', (req : Request, res : Response) => {
    res.status(200).send('Hello World!');
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));