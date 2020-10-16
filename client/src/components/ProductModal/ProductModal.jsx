import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { OrderItem, Product } from "../../fragments";

import {
  GET_PRODUCT_BY_ID,
  CREATE_ORDER_ITEM,
  GET_ORDER_ITEMS_BY_PRODUCT,
  UPDATE_ORDER_ITEM,
  DELETE_ORDER_ITEM,
} from "./ProductModal.gql";
import * as Styled from "./ProductModal.styled";
import { Button } from "../Button";
import { Modal } from "../Modal";

export const ProductModal = ({ onClose, productId }) => {
  const {
    data: { product, product: { description, name, price, inStock } = {} } = {},
  } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { _id: productId },
  });

  const {
    data: { orderItems: [orderItem = {}] = [] } = {},
  } = useQuery(GET_ORDER_ITEMS_BY_PRODUCT, { variables: { productId } });

  const { _id: orderItemId, quantity: currentQuantity } = orderItem;

  const [createOrderItem] = useMutation(CREATE_ORDER_ITEM, {
    update: (cache, { data: { createOrderItem } }) => {
      cache.modify({
        fields: {
          orderItems(existingOrderItemRefs = []) {
            const newOrderItemRef = cache.writeFragment({
              data: createOrderItem,
              fragment: OrderItem,
              fragmentName: "OrderItem",
            });
            return [...existingOrderItemRefs, newOrderItemRef];
          },
        },
      });
    },
  });

  const [updateOrderItem] = useMutation(UPDATE_ORDER_ITEM, {
    update: (
      cache,
      {
        data: {
          updateOrderItem: { quantity: newQuantity },
        },
      }
    ) => {
      const id = cache.identify(product);
      const quantityDiff = currentQuantity - newQuantity;
      cache.writeFragment({
        id,
        data: { ...product, inStock: inStock + quantityDiff },
        fragment: Product,
      });
    },
  });

  const [deleteOrderItem] = useMutation(DELETE_ORDER_ITEM, {
    variables: { _id: orderItemId },
    update: (cache) => {
      cache.modify({
        fields: {
          orderItems: (existingOrderItems = []) => {
            const id = cache.identify(orderItem);
            return existingOrderItems.filter(({ __ref }) => __ref !== id);
          },
        },
      });
      const id = cache.identify(product);
      cache.writeFragment({
        id,
        data: { ...product, inStock: inStock + 1 },
        fragment: Product,
      });
    },
  });

  useEffect(() => {});
  const incrementOrderItem = () => {
    if (orderItemId) {
      updateOrderItem({
        variables: { _id: orderItemId, quantity: currentQuantity + 1 },
      });
    } else {
      createOrderItem({
        variables: { productId, quantity: 1 },
      });
    }
  };

  const decrementOrderItem = () => {
    if (currentQuantity > 1) {
      updateOrderItem({
        variables: { _id: orderItemId, quantity: currentQuantity - 1 },
      });
    } else if (currentQuantity === 1) {
      deleteOrderItem();
    }
  };

  return (
    <Modal onClose={onClose}>
      <Styled.Columns>
        <Styled.Column flex={2}>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Description>{description}</Styled.Description>
        </Styled.Column>
        <Styled.Column>
          <Styled.Price>€{Number(price).toFixed(2)}</Styled.Price>
          <Styled.Price>Availability: {inStock}</Styled.Price>
          <Button
            backgroundColor="limegreen"
            disabled={!inStock}
            onClick={incrementOrderItem}
          >
            Add to cart
          </Button>
          <Button
            backgroundColor="crimson"
            disabled={!currentQuantity}
            onClick={decrementOrderItem}
          >
            remove from cart
          </Button>
          <p>this item in cart: {currentQuantity}</p>
          <Button backgroundColor="#498bf5" onClick={onClose}>
            close
          </Button>
        </Styled.Column>
      </Styled.Columns>
    </Modal>
  );
};
