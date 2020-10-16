import React from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "./Products.gql";
import { Product } from "../Product";

export const Products = () => {
  const { data: { products = [] } = {} } = useQuery(GET_PRODUCTS);

  return products.map(({ _id }) => <Product key={_id} id={_id} />);
};
