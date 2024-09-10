import { Router, Request, Response } from "express";
import upload from "../config/uploadConfig";

const imageRouter = Router();

imageRouter.post('/', upload.array('image', 5), (req: Request, res: Response) => {
    console.log(req.files);
    res.sendStatus(200);
});

export default imageRouter;