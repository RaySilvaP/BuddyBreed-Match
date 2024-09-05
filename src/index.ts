import 'dotenv/config';
import express, {Request, Response} from 'express';
import { generateToken, verifyToken } from './service/jwtService';
import { authentication } from './middleware';

const app = express();
const port = process.env.PORT

app.get('/', authentication, (req : Request, res : Response) => {
    res.status(200).send('Hello World!');
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));