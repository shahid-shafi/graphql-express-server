export const typeDefs = `#graphql
type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    password: String!
    passwordConfirm: String!
}

type Product {
    id: ID!
    title: String!
    price: Int!
    quantity: Int!
    category: String!
}

type Reviews {
    id: ID!
    title: String!
    rating: Float!
}

type Query {
    users: [User]
    products: [Product]
    reviews: [Review]
}
`;