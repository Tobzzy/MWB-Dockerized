const { OrderItem, Product } = require("../../../models");
const { pubsub } = require("../../helper");
const updateProductResolver = require("./updateProductResolver");

module.exports = async (
  parent,
  { data: { productId, quantity } = {} } = {}
) => {
  try {
    const orderItem = await OrderItem.create({
      product: productId,
      quantity,
    });
    const { inStock } = await Product.findOne({ _id: productId });
    await updateProductResolver(null, {
      _id: productId,
      data: { inStock: inStock - quantity },
    });
    pubsub.publish("orderItems", {
      orderItems: orderItem,
    });
    return orderItem;
  } catch (error) {
    return error;
  }
};
