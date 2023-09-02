import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            maxLength: 40,
            minLength: 3,
            required: [true, 'User must have a name.'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Please provide a valid email address.',
            ],
        },
        phone: String,
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8,
            select: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (this, next) {
    const existingUser = await User.findOne({ email: this.email });

    if (existingUser) {
        throw new Error('Email already in use, please use different email address');
    } else {
        next();
    }
});

const User = model('User', userSchema);

export default User;
