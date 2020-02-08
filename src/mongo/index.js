import mongo from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
const { DB_URL_TEST, NODE_ENV, DB_URL } = process.env;
export const connected = chalk.bold.cyan;
export const error = chalk.bold.yellow;
export const disconnected = chalk.bold.red;
export const termination = chalk.bold.magenta;

mongo.set('useCreateIndex', true);
mongo.connect(NODE_ENV !== 'test' ? DB_URL : DB_URL_TEST, {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongo;
connection.on('connected', async () => {
  console.log(connected(`Database connected at ${connection.db.databaseName}!`));
});
connection.on('error', err => {
  console.log(error(`Database connection error: ${err.message}`));
});

connection.on('disconnected', () => {
  console.log(disconnected('Database disconnected!'));
});

export default connection;
