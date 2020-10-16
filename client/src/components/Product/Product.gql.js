import { gql } from "@apollo/client";

import { Product } from "../../fragments";

export const GET_PRODUCT_BY_ID = gql`
  query($_id: ID!) {
    product(_id: $_id) {
      ...Product
    }
  }
  ${Product}
`;
