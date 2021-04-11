import { ApolloServer } from 'apollo-server';
import database from './mongodb/database';

export default function startServer({ typeDefs, resolvers }) {
    database.connect();    
    
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server running to port: http://localhost:${url}`));
}
