import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../components/button';
import Header from '../components/header';
import Layout from '../components/layout';
import Table from '../components/table';
import summarizeCart from '../helpers/summarizeCart';
import { useCart } from '../store/cart-context';
import toCurrency from '../utils/formatters/currency';

const Summary: React.FC = () => {
  const router = useRouter();

  const { products } = useCart();

  const handleClick = () => {
    router.push('/checkout');
  };

  return (
    <Layout>
      <Header>Resumo do pedido</Header>
      {products.length ? (
        <>
          <Table>
            <Table.THead>
              <Table.TR>
                <Table.TH>Qtd.</Table.TH>
                <Table.TH>Produto</Table.TH>
                <Table.TH>Preço Un.</Table.TH>
              </Table.TR>
            </Table.THead>
            <Table.TBody>
              {products.map((product) => (
                <Table.TR>
                  <Table.TD>{product.quantity}</Table.TD>
                  <Table.TD>{product.name}</Table.TD>
                  <Table.TD>{toCurrency(product.price)}</Table.TD>
                </Table.TR>
              ))}
            </Table.TBody>
            <Table.TFoot>
              <Table.TR>
                <Table.TD colSpan={2}>Total</Table.TD>
                <Table.TD>{toCurrency(summarizeCart(products))}</Table.TD>
              </Table.TR>
            </Table.TFoot>
          </Table>
          <Button appearance="primary" onClick={handleClick}>
            Checkout
          </Button>
        </>
      ) : (
        <>
          Seu carrinho está vazio. Veja nossas ofertas clicando{' '}
          <Link href="/">aqui</Link>.
        </>
      )}
    </Layout>
  );
};

export default Summary;
