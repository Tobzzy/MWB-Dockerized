import { gql } from "@apollo/client";

export const Product = gql`
  fragment Product on Product {
    _id
    name
    description
    price
    inStock
  }
`;
