import { DocumentSearch } from '@styled-icons/fluentui-system-filled';

import Header from '../components/header';
import Layout from '../components/layout';
import ProductHero from '../components/product';

const Index: React.FC = () => (
  <Layout>
    <Header>Produtos</Header>
    <ProductHero
      name="Consultas"
      price={0.24}
      promotions={[
        { price: 0.09, quantity: 1000 },
        { price: 0.16, quantity: 2000 },
      ]}
      icon={DocumentSearch}
    />
  </Layout>
);

export default Index;
