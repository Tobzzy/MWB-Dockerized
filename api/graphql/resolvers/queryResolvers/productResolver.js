const { Product } = require("../../../models");

module.exports = async (parent, { _id }) => {
  const product = await Product.findOne({ _id });
  return product;
};
