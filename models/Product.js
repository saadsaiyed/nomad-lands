const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name : String,
    item_code : String,
    zone: {
        type: String,
        enum: ['G', 'R'],
        default: 'G'
    },
},{
    timestamps: true
});

mongoose.model('products', productSchema, 'products');