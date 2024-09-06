import multer from "multer";
import { join } from "path";
import mime from "mime";
import crypto from "crypto";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, join(__dirname, '../../uploads'));
    },
    filename(req, file, callback) {
        const uuid = crypto.randomUUID();
        const ext = mime.extension(file.mimetype);
        const filename = `${uuid}.${ext}`
        callback(null, filename);
    },
});

export default multer({storage});