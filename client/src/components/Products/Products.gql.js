import { gql } from "@apollo/client";

import { Product } from "../../fragments";

export const GET_PRODUCTS = gql`
  query {
    products {
      ...Product
    }
  }
  ${Product}
`;
