import express from 'express';
import cors from 'cors';
import userRouter from './routes/user';

export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.disable('x-powered-by');
app.get('/', (request, response) => {
  response.send('Hello world!');
});
