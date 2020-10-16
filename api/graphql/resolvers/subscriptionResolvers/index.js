const orderItemsSubscription = require("./orderItemsSubscription");
const productsSubscription = require("./productsSubscription");

module.exports = {
  orderItems: orderItemsSubscription,
  products: productsSubscription,
};
