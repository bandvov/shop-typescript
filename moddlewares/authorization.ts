import jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import User from '../models/User';

module.exports = async (req: Request, res: Response, next: Function) => {
  try {
    if (!req.headers.authorization) throw new Error('Forbidden');
    const token = req.headers.authorization.replace('Bearer ', '');
    const { email } = jwt.verify(token, process.env.SALT);
    const userExist = await User.findOne({ email });

    if (!userExist) throw new Error('Forbidden');

    next();
  } catch (err) {
    res.status(401).json({ message: err });
  }
};
