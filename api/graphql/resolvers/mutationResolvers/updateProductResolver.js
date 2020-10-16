const { Product } = require("../../../models");
const { pubsub } = require("../../helper");

module.exports = async (parent, { _id, data: { inStock } = {} } = {}) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id },
      { inStock },
      { new: true }
    );
    pubsub.publish("products", {
      products: [updatedProduct],
    });
    return updatedProduct;
  } catch (error) {
    return error;
  }
};
