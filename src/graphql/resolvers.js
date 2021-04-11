import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeTypes(resolversArray);

export default resolvers;

