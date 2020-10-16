import styled from "styled-components";

export const Product = styled.div(() => ({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  ":nth-child(2n)": {
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  "@media (hover: hover) and (pointer: fine)": {
    ":hover": {
      backgroundColor: "hsl(0, 0%, 90%)",
    },
  },
}));
