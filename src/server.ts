import express from "express";
import cors from 'cors';
import 'dotenv/config';
import "./dataBase/dataBaseMongoDB";
import { routes } from "./routers/index.routes";
import uploadErrorHandler from "./middlewares/uploadErrorHandler";
import path from 'path'; 

const port = process.env.PORT;
const api = express();


api.use('/uploads', express.static(path.join(__dirname, '../uploads')));

api.use(express.json());
api.use(cors({ origin: '*' }));
api.use(routes);

api.use(uploadErrorHandler);

api.listen(port, () => {
    console.log(`Server online on port: ${port}`);
});