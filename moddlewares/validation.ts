import { Request, Response } from 'express';
import { EMAIL_REGEXP, NAME_REGEXP, PASSWORD_REGEXP } from '../configs';

export const emailValidator = (req:Request, res:Response, next:Function) => {
  const { email } = req.body;

  if (!email || email?.trim() === '') {
    res.status(400).json({ message: 'Email not provided' });
  }
  console.log('email', !EMAIL_REGEXP.test(String(email).toLowerCase()));

  if (!EMAIL_REGEXP.test(String(email).toLowerCase())) {
    res.status(400).json({ message: 'Invalid email format' });
  }
  next();
};
export const nameValidator = (req:Request, res:Response, next:Function) => {
  const { firstName } = req.body;

  if (!firstName || firstName?.trim() === '') {
    res.status(400).json({ message: 'Missing parameters' });
  }

  if (!NAME_REGEXP.test(String(firstName))) {
    res.status(400).json({ message: 'Missing parameters' });
  }
  next();
};
export const passwordValidator = (req:Request, res:Response, next:Function) => {
  const { password } = req.body;

  if (!password || password?.trim() === '') {
    res.status(400).json({ message: 'Password not provided' });
  }
  if (!PASSWORD_REGEXP.test(String(password))) {
    res.status(400).json({ message: 'Invalid password format' });
  }
  next();
};
