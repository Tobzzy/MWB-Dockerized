const { Product } = require("../../../models");
const { pubsub } = require("../../helper");

module.exports = async (
  parent,
  { data: { description, name, price, inStock } = {} } = {}
) => {
  try {
    const createProductDetail = await Product.create({
      description,
      name,
      price,
      inStock,
    });
    pubsub.publish("products", {
      products: createProductDetail,
    });
    return createProductDetail;
  } catch (error) {
    return error;
  }
};
