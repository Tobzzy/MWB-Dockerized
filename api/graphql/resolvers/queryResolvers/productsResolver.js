const { Product } = require("../../../models");

module.exports = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    return error;
  }
};
