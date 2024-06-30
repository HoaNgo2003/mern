const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    deleted: Boolean,
    position: Number,
    status: String
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product