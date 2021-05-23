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

  body, input {
    font: ${(props) => props.theme.fonts.body};
    line-height: 27px;
    color: ${(props) => props.theme.colors.grey};
  }

  a {
    font-size: 16px;
    text-decoration: underline;

    color: ${(props) => props.theme.colors.primary};
  }
`;
