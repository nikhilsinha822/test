const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true
  },
  price: {
    type : Number,
    required : true
  },
  category:{
    type : String,
    required : true
  },
  description:{
    type : String,
    minlength : 20,
    required : true
  },
  rating:[{
    userid:{
        type : String,
        required : true,
        unique : true
    },
    ratingno:{
        type : Number,
        required : true
    }
  }],
  qty:{
    type : Number,
    required : true
  },
  imageurl:{
    type : String,
    required : true
  }
}, {timestamps: true});
module.exports=mongoose.model("Product",productSchema);