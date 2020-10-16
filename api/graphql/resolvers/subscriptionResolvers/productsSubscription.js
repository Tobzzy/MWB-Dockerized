const { pubsub } = require("../../helper");

module.exports = {
  subscribe: (parent, args, ctx, info) => {
    return pubsub.asyncIterator("products");
  },
};
