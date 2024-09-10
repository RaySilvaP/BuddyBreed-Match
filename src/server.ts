import express  from "express";
import cors from 'cors';
import 'dotenv/config';
import imageRouter from "./controllers/imageController";
import { uploadErrorHandler } from "./middleware";

const port = process.env.PORT;
const api = express();

api.use(express.json());
api.use(cors());

api.use('/upload', imageRouter);
api.use(uploadErrorHandler);

api.listen(port, () => {
    console.log(`Server online on port: ${port}`)
});