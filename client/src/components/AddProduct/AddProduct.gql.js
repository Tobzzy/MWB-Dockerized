import { gql } from "@apollo/client";

import { Product } from "../../fragments";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Float!
    $inStock: Float!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        inStock: $inStock
      }
    ) {
      ...Product
    }
  }
  ${Product}
`;

export const GET_PRODUCTS = gql`
  query {
    product {
      ...Product
    }
  }
  ${Product}
`;
