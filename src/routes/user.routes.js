import { Router } from 'express';
import { userRegistration } from '../controllers/user.controller.js';

import { upload } from '../middlewares/multer.middlewares.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'coverImage',
      maxCount: 1,
    },
  ]),
  userRegistration,
);

export default router;
