const mongoose = require("mongoose");
const { Schema } = mongoose;

const preferenceSchema = new Schema({
    property_types: [ { type: Schema.Types.ObjectId, ref: "Property_Type" }], // This data might be stored in cache.
    num_tenants: Number,
});

const userLesseeSchema = new Schema(
    {
        _user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        current_address: { type: String, required: false },
        prev_landlord: { type: String, required: false },
        lease_period: { type: Number, enum: [1, 2, 3], required: true, default: 1 }, //  1 (3 months), 2 (6 months), 3 (12 months)
        message: { type: String, required: true, default: ""}, // Set default value on the POST api call
        _preference: { type: preferenceSchema, required: false },
    },
    {
        timestamp: true,
    }
);

mongoose.model("userLessee", userLesseeSchema);