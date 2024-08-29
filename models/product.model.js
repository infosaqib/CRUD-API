const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    quantity: {
        type: Number,
        required: true,
        deafult: 0
    },
    price: {
        type: Number,
        required: true,
        deafult: 0
    },
    image: { type: String }
},
    {
        timestamps: true
    }

);

// Compile model from schema
module.exports = mongoose.model('Product', productSchema);