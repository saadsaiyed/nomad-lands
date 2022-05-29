const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
    listing_id: String,
    total_production: Number,
    total_sold: Number,
    adjustment: Number,
    average_yearly_sell: Number,
    type: {
        type: String,
        enum: ['A', 'B'],
        default: 'A'
    },
    _product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
},{
    timestamp: true
});

mongoose.model('listings', listingSchema);