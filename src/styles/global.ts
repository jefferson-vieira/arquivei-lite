import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    font: 400 18px 'Roboto', sans-serif;
    line-height: 27px;
    color: ${(props) => props.theme.colors.grey};
  }
`;
