import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  background-color: rgb(246, 247, 249);
},
html {
  font-size: 62.5%;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
`;
