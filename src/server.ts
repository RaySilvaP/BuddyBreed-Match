import express  from "express";
import cors from 'cors';
import 'dotenv/config';

const port = process.env.PORT;
const api = express();

api.use(express.json());
api.use(cors());

api.listen(port, () => {
    console.log(`Server online on port: ${port}`)
});