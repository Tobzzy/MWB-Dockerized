const orderItemsResolver = require("./orderItemsResolver");
const productResolver = require("./productResolver");
const productsResolver = require("./productsResolver");

module.exports = {
  orderItems: orderItemsResolver,
  product: productResolver,
  products: productsResolver,
};
