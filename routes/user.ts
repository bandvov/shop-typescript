import express from 'express';
import { catchErrors } from '../handlers/error';
import {
  register, login, updateUser, deleteUser,
} from '../controllers/user';

const router = express.Router();

router.post('/register', catchErrors(register));
router.post('/login', catchErrors(login));
router.post('/update-user', catchErrors(updateUser));
router.post('/delete-user', catchErrors(deleteUser));

export default router;
