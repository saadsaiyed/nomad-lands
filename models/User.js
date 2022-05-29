const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    user_type: {
        type: Number,
        enum: [1, 2],
        default: 1
    },
    phone: String,
    email_subscription: Boolean
}, {
    timestamps: true
});

mongoose.model('users', userSchema);