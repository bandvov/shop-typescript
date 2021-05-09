import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.f8dbj.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

export const connectDb = () => {
  mongoose.connect(uri, options).then((res) => {
    console.log('Connected to mongodb');
  }).catch((err) => {
    throw err;
  });
};
