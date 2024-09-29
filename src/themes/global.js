import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif; /* MUI's default font */
  }
  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 0;
  }
  /* Add any additional global styles here */
`;

export default GlobalStyles;
