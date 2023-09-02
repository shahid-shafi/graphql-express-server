import { ApolloServer } from '@apollo/server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import mongoose, { ConnectOptions } from 'mongoose';
import { startStandaloneServer } from '@apollo/server/standalone';

const dbUrl = 'mongodb://127.0.0.1:27017/graphql';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const PORT = 8000;

mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    } as ConnectOptions)
    .then(async () => {
        console.log('✅ DataBase Connected Successfully...');
        const { url } = await startStandaloneServer(server);
        return url;
    }).then(url => console.log(`🚀 Server running at ${url}`))
    .catch((error) => console.log('❌ Error:', error));
