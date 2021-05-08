import { Response, Request } from 'express';
import sha256 from 'sha256';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser } from '../types/user';

dotenv.config();

const { SALT, TOKEN_SALT, TOKEN_EXPIRES_IN } = process.env;

export const register = async (req: Request, res: Response) => {
  const {
    firstName, lastName, email, password,
  } = req.body as Pick<IUser, 'firstName' | 'lastName' | 'email' | 'password' >;
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ message: 'Missing parameters' });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: 'User already exist' });
  }
  await new User({
    firstName, lastName, email, password: sha256(password + SALT),
  });
  res.status(200).json({ message: 'User successfully registered' });
};

export const login = async (req: Request, res:Response) => {
  const {
    email, password,
  } = req.body as Pick<IUser, 'email' | 'password' >;
  const user:IUser | null = await User.findOne({ email, password: sha256(password + SALT) });
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  const token = jwt.sign(user.email, TOKEN_SALT, { expiresIn: TOKEN_EXPIRES_IN });

  res.cookie('access-token', `Bearer ${token}`, {
    domain: 'localhost:3000', expires: new Date(Date.now() + 24 * 3600000), secure: true, signed: true,
  }); // cookie will be removed after 24 hours

  res.status(200).json({
    firstName: user.firstName, lastName: user.lastName, id: user._id, email: user.email,
  });
};

export const updateUser = async (req:Request, res:Response) => {
  const {
    _id,
    firstName, lastName, email, password, avatar,
    active, address, phoneNumber,
  } = req.body as Pick<IUser, '_id' | 'firstName' | 'lastName' | 'email' | 'password' | 'phoneNumber' | 'address' | 'avatar' | 'active' >;

  const userExists = await User.findOne({ email });
  if (!userExists) {
    res.status(404).json({ message: 'User not found' });
  }

  const user: IUser | null = await User.findByIdAndUpdate(_id, {
    $set: {
      firstName, lastName, email, password: sha256(password + SALT), avatar, active, address, phoneNumber,
    },
  }, { new: true });

  if (user) {
    res.status(200).json({ message: 'User data successfully updated', user });
  }
};

export const deleteUser = async (req:Request, res:Response) => {
  const {
    _id,
  } = req.body as Pick<IUser, '_id' >;

  const user = await User.findByIdAndDelete(_id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ message: 'User successfully deleted' });
};
