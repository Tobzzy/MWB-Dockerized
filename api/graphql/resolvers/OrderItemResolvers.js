const { Product } = require("../../models");

module.exports = {
  product: async ({ product: [_id] }) => {
    const product = await Product.findOne(_id);
    return product;
  },
};
