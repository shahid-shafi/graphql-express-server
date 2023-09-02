import { model, Schema } from 'mongoose';

const reviewSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Review must belong to the user'],
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Review must belong to the product'],
    },
    rating: {
        type: Number,
        required: [true, 'Review must contain a rating'],
        min: 1,
        max: 5,
    },
    comment: String,
    v: {
        type: Number,
        select: false,
    }
},
    {
        timestamps: true,
    },
);

const Review = model('Review', reviewSchema);

export default Review;