const { OrderItem, Product } = require("../../../models");
const { pubsub } = require("../../helper");
const updateProductResolver = require("./updateProductResolver");

module.exports = async (
  parent,
  { _id, data: { quantity: newQuantity } = {} } = {}
) => {
  try {
    const { quantity: currentQuantity } = await OrderItem.findOne({ _id });

    const updatedOrderItem = await OrderItem.findOneAndUpdate(
      { _id },
      { quantity: newQuantity },
      { new: true }
    ).populate("product");

    const quantityDiff = currentQuantity - newQuantity;

    const { product: [{ _id: productId } = {}] = [] } = updatedOrderItem;
    const { inStock } = await Product.findOne({ _id: productId });

    await updateProductResolver(null, {
      _id: productId,
      data: { inStock: inStock + quantityDiff },
    });

    pubsub.publish("orderItems", {
      orderItems: [updatedOrderItem],
    });

    return updatedOrderItem;
  } catch (error) {
    return error;
  }
};
