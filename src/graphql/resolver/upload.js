import { ApolloError } from 'apollo-server-express';
import Helper from '../../helpers';

export default async ({ file }) => {
  try {
    const result = await Helper.uploadFile(file);
    return { url: (result.secure_url || result.url) };
  } catch (err) {
    throw new ApolloError(err.message);
  }
};
