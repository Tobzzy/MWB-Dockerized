import styled from "styled-components";

export const Header = styled.title(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#cce8d3",
  height: "64px",
  alignItems: "center",
}));

export const Cart = styled.h3(() => ({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
}));
