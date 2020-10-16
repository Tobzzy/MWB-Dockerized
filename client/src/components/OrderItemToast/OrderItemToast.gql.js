import { gql } from "@apollo/client";

import { Product } from "../../fragments";

export const GET_PRODUCTS_QUERY = gql`
  query OrderItemToastGetProducts {
    products {
      ...Product
    }
  }
  ${Product}
`;

export const PRODUCTS_SUBSCRIPTION = gql`
  subscription SubcriptionGetProducts {
    products {
      ...Product
    }
  }
  ${Product}
`;
