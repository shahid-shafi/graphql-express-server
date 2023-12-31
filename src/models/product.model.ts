import { model, Schema } from 'mongoose';

const productSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: 1,
    },
    brand: String,
    discountPercentage: {
      type: Number,
      default: 0,
    },
    category: String,
    createdby: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Product creatorId is required'],
    },
    stock: {
      type: Number,
      required: [true, 'Product available stock is required'],
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    __v: {
      type: Number,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model('Product', productSchema);

export default Product;
