const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    products:[{
        
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity:{
            type: Number,
            default: 1
        }
    }]
}, {timestamps: true});


module.exports = mongoose("Cart",cartSchema)