import Head from 'next/head';

import { Container, Header, Main, Footer, HeartIcon, Anchor } from './styles';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Arquivei Lite',
}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>{title}</Header>
      <Main>{children}</Main>
      <Footer>
        Feito com <HeartIcon size="1.25rem" title="amor" /> por{' '}
        <Anchor
          href="https://github.com/jefferson-vieira"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir para o GitHub"
        >
          Jefferson Vieira da Silva
        </Anchor>
      </Footer>
    </Container>
  );
};

export default Layout;
