import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-500"]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme["gray-300"]};
    background-color: ${({ theme }) => theme["gray-900"]};
  }

  body,
  input,
  button,
  textarea {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
