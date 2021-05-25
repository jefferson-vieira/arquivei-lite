import Head from 'next/head';

import { Container, Header, Main, Footer, HeartIcon } from './styles';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Arquivei Lite',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Header>{title}</Header>
        <Main>{children}</Main>
        <Footer>
          Feito com <HeartIcon title="amor" size="1.25rem" /> por{' '}
          <a
            href="https://github.com/jefferson-vieira"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir para o GitHub"
          >
            Jefferson Vieira da Silva
          </a>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
