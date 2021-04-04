const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    agency:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:Number
    },
    coordinator:{
        type: String
    }
})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;