import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user';
import * as swaggerDocument from './swagger/openapi.json';
import { connectDb } from './db';

export const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use(cookieParser('secret'));
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.disable('x-powered-by');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (request, response) => {
  response.status(200).json({ text: 'Hello world!' });
});
