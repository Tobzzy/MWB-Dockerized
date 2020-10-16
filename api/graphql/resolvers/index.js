const mutationResolvers = require("./mutationResolvers");
const queryResolvers = require("./queryResolvers");
const subscriptionResolvers = require("./subscriptionResolvers");
const OrderItemResolvers = require("./OrderItemResolvers");

module.exports = {
  RootMutation: mutationResolvers,
  RootQuery: queryResolvers,
  RootSubscription: subscriptionResolvers,
  OrderItem: OrderItemResolvers,
};
