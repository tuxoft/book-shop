import * as express from 'express';
import * as multer from 'multer';
import * as uuidv4 from 'uuid/v4';
import * as Jimp from 'jimp';

import { BusinessLogicError } from '../../errors/businesslogic.errors';

const router = express.Router();

export default router;

enum ImageResolution {
  HIGH,
  LOW,
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg') {
      cb(new BusinessLogicError('Неподдерживаемый формат файла'), false);
    } else {
      cb(null, true);
    }
  },
});

router.post('/cover', upload.single('cover'), async (req, res, next) => {
  try {
    const filename = generateFilenameWithOriginalExtension(req.file.originalname);

    const urls = await Promise.all([
      convertImageAndSave(req.file.buffer, filename, ImageResolution.LOW),
      convertImageAndSave(req.file.buffer, filename, ImageResolution.HIGH),
    ]);

    // Нужно вернуть клиенту url "маленькой" картинки (ImageResolution.LOW),
    // т.к. в БД должны содержаться url "маленьких" картинок
    res.send(urls[0]);

  } catch (err) {
    next(err);
  }
});

function generateFilenameWithOriginalExtension(originalFilename: string) {
  const fileExtensionMatch = originalFilename.match('\\.[a-zA-Z]+$');
  return uuidv4() + (fileExtensionMatch ? fileExtensionMatch[0] : '');
}

function convertImageAndSave(src: string | Buffer,
                             filename: string,
                             resolution: ImageResolution,
                             quality: number = 60): Promise<any> {

  const params = getParamsForImageResolution(resolution);
  return Jimp.read(src)
    .then(image => image.resize(params.width, Jimp.AUTO).quality(quality))
    .then(image => new Promise(
      (res, rej) => image.write(`${params.path}/${filename}`, (err, ret) =>
          err ? rej(err) : res(`${params.uri}/${filename}`),
      ),
    ));
}

function getParamsForImageResolution(resolution: ImageResolution) {
  switch (resolution) {
    case ImageResolution.HIGH:
      return {
        uri: '/files/covers/high-resolution',
        path:'./storage/files/covers/high-resolution',
        width: 512,
      };
    case ImageResolution.LOW:
      return {
        uri: '/files/covers/low-resolution',
        path:'./storage/files/covers/low-resolution',
        width: 140,
      };
    default:
      throw Error('Unknown image resolution');
  }
}
