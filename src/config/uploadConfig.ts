import multer from "multer";
import { join } from "path";
import mime from "mime";
import crypto from "crypto";
import fs from "fs";

// Diretório de destino
const uploadPath = join(__dirname, '../../uploads');

// Verificando se o diretório existe, se não, criamos
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, uploadPath);  // Diretório de destino
  },
  filename(req, file, callback) {
    const uuid = crypto.randomUUID();
    const ext = mime.extension(file.mimetype);
    const filename = `${uuid}.${ext}`;
    callback(null, filename);  // Nome do arquivo gerado
  },
});

const upload = multer({ storage });

// Exporta a configuração do multer
export default upload;
