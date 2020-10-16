import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ORDER_ITEMS } from "./Header.gql";

import * as Styled from "./Header.styled";

export const Header = () => {
  const { data: { orderItems = [] } = {} } = useQuery(GET_ORDER_ITEMS);

  const quantity = orderItems.length;

  return (
    <Styled.Header>
      <h1>Test Application</h1>
      <Styled.Cart>Total in cart(s): {quantity}</Styled.Cart>
    </Styled.Header>
  );
};
