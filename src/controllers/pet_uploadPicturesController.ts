import { Request, Response } from "express";
import UploadPicturesCaseUse from "../models/caseUse/Pet_UploadPicturesCaseUse";

export default class UploadPicturesController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const files = req.files as Express.Multer.File[];

        if (!files || files.length === 0) {
            return res.status(400).json({ error: "Nenhuma imagem foi enviada." });
        }

        const filesNames = files.map((file) => file.filename);
        const caseUse = new UploadPicturesCaseUse();

        try {
            await caseUse.execute(id, filesNames);
            res.status(200).json({ message: "Imagens enviadas com sucesso.", files: filesNames });
        } catch (err) {
            res.status(500).json({ error: "Erro ao fazer upload das imagens.", details: err });
        }
    }
}
