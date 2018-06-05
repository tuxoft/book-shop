import * as express from 'express';
import * as multer from 'multer';
import * as uuidv4 from 'uuid/v4';
import * as Jimp from 'jimp';

import { BusinessLogicError } from '../../errors/businesslogic.errors';

const router = express.Router();

export default router;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/upload/covers');
  },
  filename: function (req, file, cb) {
    let filename = uuidv4();

    const extension = file.originalname.match('\\.[a-zA-Z]+$');
    if (extension) {
      filename += extension[0];
    }

    cb(null, filename);
  }
});

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024,
  },
});

router.post('/cover', upload.single('cover'), async (req, res, next) => {
  try {

    const image = await Jimp.read(req.file.path);
    image.clone().resize(512, Jimp.AUTO).quality(60).write(`./storage/files/covers/high-resolution/${req.file.filename}`);
    image.clone().resize(140, Jimp.AUTO).quality(60).write(`./storage/files/covers/low-resolution/${req.file.filename}`);

    res.send(`files/covers/low-resolution/${req.file.filename}`);

  } catch (err) {
    next(err);
  }
});

function fileFilter(req, file, cb) {
  if (file.mimetype !== 'image/jpeg') {
    cb(new BusinessLogicError('Неподдерживаемый формат файла'));
    return;
  }

  cb(null, true);
}
