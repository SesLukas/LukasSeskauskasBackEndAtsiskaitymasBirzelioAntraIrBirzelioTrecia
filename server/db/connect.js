import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.DB_CLUSTER_ID}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;

const client = new MongoClient(uri);

// Prisijungiama tik jei dar neprisijungta
export const dbConnect = async () => {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db(process.env.DB_NAME);
};
