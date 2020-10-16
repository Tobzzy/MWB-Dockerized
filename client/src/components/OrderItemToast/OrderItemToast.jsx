import React from "react";
import { useSubscription, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  GET_PRODUCTS_QUERY,
  PRODUCTS_SUBSCRIPTION,
} from "./OrderItemToast.gql";

export const OrderItemToast = () => {
  const { data: { products = [] } = {} } = useQuery(GET_PRODUCTS_QUERY);

  useSubscription(PRODUCTS_SUBSCRIPTION, {
    onSubscriptionData: ({
      subscriptionData: {
        data: {
          products: [{ _id: newProductId, inStock: newInStock, name }],
        },
      },
    }) => {
      const { inStock: currInStock } = products.find(
        ({ _id }) => _id === newProductId
      );
      toast(
        currInStock - newInStock === 1
          ? `${name} quantity decreased by 1`
          : `${name} quantity increased by 1`
      );
    },
  });

  return <ToastContainer />;
};
