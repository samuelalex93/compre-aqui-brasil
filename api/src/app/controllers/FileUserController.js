import multer from 'multer';
import multerConfig from '../config/multerConfig';

import File from '../models/File';

const upload = multer(multerConfig).single('foto');

class FileUserController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { name, path } = req.file;
        const { user_id } = req.body;
        const file = await File.create({ name, path, user_id });

        return res.json(file);
      } catch (e) {
        return res.status(400).json({
          errors: ['User not exist'],
        });
      }
    });
  }
}

export default new FileUserController();
