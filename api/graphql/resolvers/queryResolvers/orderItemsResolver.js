const { OrderItem } = require("../../../models");

module.exports = async (parent, { productId }) => {
  try {
    const orderItems = await OrderItem.find();
    return productId
      ? orderItems.filter(
          ({ product }) => String(product[0]) === String(productId)
        )
      : orderItems;
  } catch (error) {
    return error;
  }
};
