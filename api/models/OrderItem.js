const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderItem = new Schema({
  quantity: {
    type: Number,
  },
  product: [{ type: Schema.Types.ObjectId, ref: "product" }],
});

module.exports = mongoose.model("orderItem", orderItem);
