import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

export default function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://localhost:27017/graphql-node', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
,    })
    
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Server running to port: http://localhost:${url}`));
}
