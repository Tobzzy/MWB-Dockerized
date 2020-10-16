import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_PRODUCT } from "./AddProduct.gql";
import * as Styled from "./AddProduct.styled";
import { Product } from "../../fragments";
import { Modal } from "../Modal";
import { Button } from "../Button";

export const AddProduct = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    update: (cache, { data: { createProduct } }) => {
      cache.modify({
        fields: {
          products(existingProducts = []) {
            const newProduct = cache.writeFragment({
              data: createProduct,
              fragment: Product,
            });
            return [...existingProducts, newProduct];
          },
        },
      });
    },
  });

  /** @todo this form would ideally have validation */

  return (
    <Modal onClose={onClose}>
      <Styled.Main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProduct({
              variables: {
                name,
                description,
                price,
                inStock,
              },
            });
            onClose();
          }}
        >
          <h3>Add new product</h3>
          <Styled.Column>
            <label>Name: </label>
            <Styled.Input>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </Styled.Input>
          </Styled.Column>
          <Styled.Column>
            <label>Description: </label>
            <Styled.TextArea>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </Styled.TextArea>
          </Styled.Column>
          <Styled.Column>
            <label>Price: </label>
            <Styled.Input>
              <input
                value={price}
                type="number"
                step="0.01"
                min="0.01"
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              ></input>
            </Styled.Input>
          </Styled.Column>
          <Styled.Column>
            <label>Quantity InStock: </label>
            <Styled.Input>
              <input
                value={inStock}
                type="number"
                min="1"
                onChange={(e) => setInStock(Number(e.target.value))}
                required
              ></input>
            </Styled.Input>
          </Styled.Column>
          <Button backgroundColor="#91c9a8" type="submit">
            Submit
          </Button>
        </form>
      </Styled.Main>
    </Modal>
  );
};
