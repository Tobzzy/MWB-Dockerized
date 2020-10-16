import { gql } from "@apollo/client";

import { Product, OrderItem } from "../../fragments";

export const GET_PRODUCT_BY_ID = gql`
  query($_id: ID!) {
    product(_id: $_id) {
      ...Product
    }
  }
  ${Product}
`;

export const GET_ORDER_ITEMS_BY_PRODUCT = gql`
  query ProductModalGetOrderItemsByProduct($productId: ID!) {
    orderItems(productId: $productId) {
      ...OrderItem
    }
  }
  ${OrderItem}
`;

export const CREATE_ORDER_ITEM = gql`
  mutation CreateOrderItem($productId: ID!, $quantity: Int!) {
    createOrderItem(data: { productId: $productId, quantity: $quantity }) {
      ...OrderItem
    }
  }
  ${OrderItem}
`;

export const UPDATE_ORDER_ITEM = gql`
  mutation UpdateOrderItem($_id: ID!, $quantity: Int!) {
    updateOrderItem(_id: $_id, data: { quantity: $quantity }) {
      ...OrderItem
    }
  }
  ${OrderItem}
`;

export const DELETE_ORDER_ITEM = gql`
  mutation DeleteOrderItem($_id: ID!) {
    deleteOrderItem(_id: $_id) {
      response
    }
  }
`;
