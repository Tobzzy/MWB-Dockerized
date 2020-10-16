import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle(() => ({
  "*": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "sans-serif",
    margin: "0",
  },
}));

export const App = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Main = styled.main(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  justifyContent: "space-between",
}));

export const Content = styled.div(() => ({
  maxWidth: "600px",
  width: "100%",
}));
