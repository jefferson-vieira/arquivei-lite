import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from '../store/cart-context';
import { theme, GlobalStyle } from '../styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default MyApp;
