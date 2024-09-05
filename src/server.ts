import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
const api = express();
api.use(express.json());
api.use(cors());

api.listen(port, () => {
    console.log(`Server online On Port ${port}`)
});