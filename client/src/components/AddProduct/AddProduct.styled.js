import styled from "styled-components";

export const Main = styled.div(() => ({
  background: "white",
  border: "none",
  fontSize: "1rem",
  fontWeight: 500,
  outline: "none",
  padding: "0.5rem 0",
  width: "100%",
}));

export const Column = styled.div(({ flex = 1 }) => ({
  display: "flex",
  flex: flex,
  flexDirection: "column",
  marginTop: "1rem",
  width: "100%",
}));

export const Input = styled.div(({ flex = 1 }) => ({
  marginTop: "0.5rem",
  width: "100%",
}));

export const TextArea = styled.div(({ flex = 1 }) => ({
  marginTop: "0.5rem",
  width: "100%",
  rows: "4",
  cols: "50",
}));
