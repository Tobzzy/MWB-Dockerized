import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCT_BY_ID } from "./Product.gql";
import { ProductModal } from "../ProductModal";
import * as Styled from "./Product.styled";

export const Product = ({ id }) => {
  const [productModalVisible, setProductModalVisible] = useState();

  const { data: { product: { name, price } = {} } = {} } = useQuery(
    GET_PRODUCT_BY_ID,
    {
      variables: { _id: id },
    }
  );

  return (
    <>
      {productModalVisible && (
        <ProductModal
          onClose={() => setProductModalVisible(false)}
          productId={id}
          visible={productModalVisible}
        />
      )}
      <Styled.Product onClick={() => setProductModalVisible(true)}>
        <span>{name}</span>
        <span>€{price}</span>
      </Styled.Product>
    </>
  );
};
