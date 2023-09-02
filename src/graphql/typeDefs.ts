const typeDefs = `#graphql
type User {
    name: String!
    email: String!
    phone: String!
    password: String
    passwordConfirm: String
}

type Product {
    title: String!
    description: String!,
    price: Int!
    brand: String!
    discountPercentage: Float!
    review: Review
    stock: Int!
    category: String!
    createdby: ID!
}

type Review {
    user: ID!
    title: String!
    product: ID!
    rating: Float!
    comment: String
}

type Query {
    getUserById(id: ID!): User
    getAllUsers(limit: Int): [User]
    getProductById(id: ID!): Product!
    getAllProducts: [Product]
    getReviewById(id: ID!): Review!
    getAllReviews: [Review]
}

input UserInput {
    name: String
    email: String
    phone: String
    password: String
    passwordConfirm: String
}

input ProductInput {
    title: String!
    description: String!
    price: Int!
    discountPercentage: Float!
    brand: String!
    category: String!
    stock: Int!
    createdBy: ID!
}

input ReviewInput {
    user: ID!
    product: ID!
    rating: Int!
    comment: String
}

type Mutation {
    createUser(userInput: UserInput): User!
    updateUserById(id: ID!, userInput: UserInput): User!
    deleteUserById(id: ID!): Boolean
    createProduct(productInput: ProductInput): Product!
    updateProductById(id: ID!, productInput: ProductInput): Product!
    deleteProductById(id: ID!): Boolean
    createReview(reviewInput: ReviewInput): Review!
    updateReviewById(id: ID!, reviewInput: ReviewInput): Review!
    deleteReviewById(id: ID!): Boolean
}
`;

export default typeDefs;