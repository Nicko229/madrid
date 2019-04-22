const mongoose = require('mongoose');

// not sure about the id
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  author: String,
  description: String,
  price: Number,
  image: String,
  // productId: Object
});

module.exports = mongoose.model('Product', productSchema);