import { gql } from 'apollo-server-express';
import Mutation from './mutation';
import Query from './query';
import Type from './type';

export default gql`
${Type}

${Mutation}

${Query}
`;
