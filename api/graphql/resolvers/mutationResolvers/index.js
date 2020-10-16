const createOrderItemResolver = require("./createOrderItemResolver");
const createProductResolver = require("./createProductResolver");
const deleteOrderItemResolver = require("./deleteOrderItemResolver");
const deleteProductResolver = require("./deleteProductResolver");
const updateOrderItemResolver = require("./updateOrderItemResolver");
const updateProductResolver = require("./updateProductResolver");

module.exports = {
  createOrderItem: createOrderItemResolver,
  createProduct: createProductResolver,
  deleteOrderItem: deleteOrderItemResolver,
  deleteProduct: deleteProductResolver,
  updateOrderItem: updateOrderItemResolver,
  updateProduct: updateProductResolver,
};
