import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';


const products = [
    {
        title: 'Iphone 15 Pro Max',
        price: 1500,
        quantity: 10,
    },
    {
        title: 'OnePlus Nord 3',
        price: 500,
        quantity: 10,
    },
];

const resolvers = {
    Query: {
        getProducts: () => products,
    },
};

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    app.use(bodyParser.json());
    app.use(express.json());
    app.use(cors());
    await server.start()
    app.use('/graphql', expressMiddleware(server));

    const PORT = 8000;
    app.listen(PORT, () => console.log('Server listening on port: ', PORT))
}

startServer();