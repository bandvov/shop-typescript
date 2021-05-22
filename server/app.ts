import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user';
import * as swaggerDocument from './swagger/openapi.json';
import { connectDb } from './db';
import { notFound } from './handlers/error';

export const app = express();

connectDb();

app.disable('x-powered-by');
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(cookieParser('secret'));
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (request, response) => {
  response.status(200).json({ text: 'Hello world!' });
});
app.use(notFound);
