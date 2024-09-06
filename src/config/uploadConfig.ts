import multer from "multer";
import { join } from "path";
import mime from "mime";
import crypto from "crypto";
import fs from "fs";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        const path = join(__dirname, '../../uploads');
        if(!fs.existsSync(path))
            fs.mkdirSync(path);
        
        callback(null, path);
    },
    filename(req, file, callback) {
        const uuid = crypto.randomUUID();
        const ext = mime.extension(file.mimetype);
        const filename = `${uuid}.${ext}`;
        callback(null, filename);
    },
});

export default multer({storage});