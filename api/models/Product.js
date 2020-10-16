const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  inStock: {
    type: Number,
  },
});

module.exports = mongoose.model("product", product);
