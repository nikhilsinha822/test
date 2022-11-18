const mongoose = require("mongoose")
const transactionSchema = new mongoose.Schema({
    cartid:{
        type: String,
        required: true
    },
    transactionid:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    coupan:{
        type: String
    }
}, {timestamps: true}); 
module.exports= mongoose.model('Transaction',transactionSchema);