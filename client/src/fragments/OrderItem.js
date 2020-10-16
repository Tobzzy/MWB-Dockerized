import { gql } from "@apollo/client";

import { Product } from "./Product";

export const OrderItem = gql`
  fragment OrderItem on OrderItem {
    _id
    quantity
    product {
      ...Product
    }
  }
  ${Product}
`;
