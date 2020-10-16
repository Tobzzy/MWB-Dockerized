const { OrderItem, Product } = require("../../../models");
const { pubsub } = require("../../helper");
const updateProductResolver = require("./updateProductResolver");

module.exports = async (parent, { _id }) => {
  let responseMSG = {};
  try {
    const deletedOrderItem = await OrderItem.findOneAndDelete({
      _id,
    }).populate("product");

    const { product: [{ _id: productId } = {}] = [] } = deletedOrderItem;
    const { inStock } = await Product.findOne({ _id: productId });

    await updateProductResolver(null, {
      _id: productId,
      data: { inStock: inStock + 1 },
    });

    return {
      response: deletedOrderItem
        ? "Success"
        : "No OrderItem found for this opertaion",
    };
  } catch (error) {
    return { response: "Fail" };
  }
};
