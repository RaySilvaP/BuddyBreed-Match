import  express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import "./dataBase/dataBaseMongoDB"
import { routes } from "./routers/index.routes";

dotenv.config();

const port = process.env.PORT;
const api = express();

api.use(express.json());
api.use(cors());
api.use(routes);

api.listen(port, () => {
    console.log(`Server online On Port ${port}`)
});