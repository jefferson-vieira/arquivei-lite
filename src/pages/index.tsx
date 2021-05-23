import { DocumentSearch } from '@styled-icons/fluentui-system-filled';

import Header from '../components/header';
import Layout from '../components/layout';
import Product from '../components/product';

const Index: React.FC = () => (
  <Layout>
    <Header>Produtos</Header>
    <Product
      title="Consultas"
      price={0.24}
      promotions={[
        [0.09, 1000],
        [0.16, 2000],
      ]}
      icon={DocumentSearch}
    />
  </Layout>
);

export default Index;
