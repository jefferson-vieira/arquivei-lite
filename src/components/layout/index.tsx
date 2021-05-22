import Head from 'next/head';

import { Container, Header, Footer, HeartIcon, Anchor } from './styles';

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
      <main>{children}</main>
      <Footer>
        Feito com <HeartIcon title="amor" /> por{' '}
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
