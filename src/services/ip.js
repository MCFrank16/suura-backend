import { SchemaError } from 'apollo-server-express';
import { IP } from '../mongo/models';

export default async reqIP => {
  try {
    await IP.create({ ip: reqIP });
  } catch (err) {
    throw new SchemaError(err.message);
  }
};
