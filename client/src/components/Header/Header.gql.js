import { gql } from "@apollo/client";

import { OrderItem } from "../../fragments";

export const GET_ORDER_ITEMS = gql`
  query {
    orderItems {
      ...OrderItem
    }
  }
  ${OrderItem}
`;
