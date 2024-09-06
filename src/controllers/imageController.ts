import { Router, Request, Response } from "express";
import upload from "../config/uploadConfig";

const imageRouter = Router();

imageRouter.post('/', upload.single('image'), (req: Request, res: Response) => {
    console.log(req.file);
    res.sendStatus(200);
});

export default imageRouter;