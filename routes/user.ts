import express from 'express';
import { catchErrors } from '../handlers/error';
import {
  REGISTER_ROUTE, LOGIN_ROUTE, UPDATE_USER_ROUTE, DELETE_USER_ROUTE,
} from '../configs';
import {
  register, login, updateUser, deleteUser,
} from '../controllers/user';

const router = express.Router();

router.post(REGISTER_ROUTE, catchErrors(register));
router.post(LOGIN_ROUTE, catchErrors(login));
router.put(UPDATE_USER_ROUTE, catchErrors(updateUser));
router.delete(DELETE_USER_ROUTE, catchErrors(deleteUser));

export default router;
