const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        index: true,
    },
    role: {
        type: String,
        default: 'subscriber'
    },
    cart: {
        type: Array,
        default: []
    },
    address: String,
    // whishlist: [{
    //     type: ObjectId,
    //     ref: 'Product'
    // }]
}, { timestamps: true });