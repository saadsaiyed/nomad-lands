const mongoose = require('mongoose');
const { Schema } = mongoose;

const userLesseeSchema = new Schema({
    _user: {
        type: Scheme.Types.ObjectId,
        ref: 'User'
    },
    current_address: String,
    prev_landlord: String,
    lease_period: {
        //  1 (3 months), 2 (6 months), 3 (12 months)
        type: Number,
        enum: [1, 2, 3], 
        default: 1
    },
    message: String,
    _preference: {
        // This data might be stored in cache. 
        type: Object,
        
    },
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

mongoose.model('barcodes', userLesseeSchema);