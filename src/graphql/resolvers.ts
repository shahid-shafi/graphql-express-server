import User from "../models/user.model";
import Product from "../models/product.model";
import Review from "../models/reviews.model";

const resolvers = {
    Query: {
        async getUserById(_: any, { id }: { id: string }) {
            return await User.findById(id);
        },
        async getAllUsers(_: any, { limit }: { limit: number }) {
            return await User.find().limit(limit);
        },
        async getProductById(_: any, { id }: { id: string }) {
            return await Product.findById(id);
        },
        async getAllProducts(_: any, { limit }: { limit: number }) {
            return await Product.find().limit(limit);
        },
        async getReviewById(_: any, { id }: { id: string }) {
            return await Review.findById(id);
        },
        async getAllReviews(_: any, { limit }: { limit: number }) {
            return await Review.find().limit(limit);
        },
    },
    Mutation: {
        async createUser(_: any, { userInput }: any) {
            return await User.create(userInput);
        },
        async updateUserById(_: any, { id, userInput }: any) {
            const { password, passwordConfirm, ...rest } = userInput;
            if (password !== passwordConfirm) {
                throw new Error("Passwords don't match");
            }
            return await User.findByIdAndUpdate(id, { rest, password }, {
                runValidators: true,
                new: true,
            });
        },
        async deleteUserById(_: any, { id }: { id: string }) {
            return (await User.deleteOne({ _id: id })).deletedCount;
        },
        async createProduct(_: any, { productInput }: any) {
            return await Product.create(productInput);
        },
        async updateProductById(_: any, { id, productInput }: any) {
            return await Product.findByIdAndUpdate(id, productInput, {
                runValidators: true,
                new: true,
            });
        },
        async deleteProductById(_: any, { id }: { id: string }) {
            return (await Product.deleteOne({ _id: id })).deletedCount;
        },
        async createReview(_: any, { productInput }: any) {
            return await Product.create(productInput);
        },
        async updateReviewById(_: any, { id, reviewInput }: any) {
            return await Review.findByIdAndUpdate(id, reviewInput, {
                runValidators: true,
                new: true,
            });
        },
        async deleteReviewById(_: any, { id }: { id: string }) {
            return (await Review.deleteOne({ _id: id })).deletedCount;
        },
    }
}

export default resolvers;