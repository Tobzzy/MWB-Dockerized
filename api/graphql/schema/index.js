module.exports = `
type Product {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    inStock: Float!
  }
  
  type OrderItem {
    _id: ID!
    quantity: Int!
    product: Product
  }
  
  input CreateOrderItemInput {
    productId: ID!
    quantity: Int!
  }

  input UpdateOrderItemInput {
    quantity: Int!
  }

  input UpdateProductInput {
    inStock: Float
  }
  
  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
    inStock: Float!
  }
  
  type RootQuery {
    products: [Product]!
    product(_id: ID!): Product!
    orderItems(productId: ID): [OrderItem]!
  }

  type DeleteRes {
    response: String!
  }
  
  type RootMutation {
    createProduct(data: CreateProductInput!): Product!
    deleteProduct(_id: ID!): DeleteRes!
    createOrderItem(data: CreateOrderItemInput!): OrderItem! 
    updateOrderItem(_id: ID!, data: UpdateOrderItemInput!): OrderItem
    updateProduct(_id: ID!, data: UpdateProductInput!): Product 
    deleteOrderItem(_id: ID!): DeleteRes!
  }
  
  type RootSubscription {
    orderItems: [OrderItem]!
    products: [Product]!
  }
  
  schema {
    query: RootQuery
    mutation: RootMutation
    subscription: RootSubscription
  }  
`;
