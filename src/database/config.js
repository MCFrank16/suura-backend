import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, DB_TEST, DB } = process.env;
const client = mongoose.connect(
  NODE_ENV === 'test' ? DB_TEST : DB,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

