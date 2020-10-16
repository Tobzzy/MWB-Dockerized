const { Product } = require("../../../models");
const { pubsub } = require("../../helper");

module.exports = async (parent, { _id }) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      _id,
    });

    return {
      response: deletedProduct
        ? "Success"
        : "No Product found for this opertaion",
    };
  } catch (error) {
    return { response: "Fail" };
  }
};
