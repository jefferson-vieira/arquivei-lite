import Link from 'next/link';
import { useRouter } from 'next/router';

import BackLink from '../components/back-link';
import Button from '../components/button';
import Header from '../components/header';
import Layout from '../components/layout';
import Table from '../components/table';
import summarizeCart, { applyPromotions } from '../helpers/summarizeCart';
import { useCart } from '../store/cart-context';
import toCurrency from '../utils/formatters/currency';

const Summary: React.FC = () => {
  const router = useRouter();

  const { products } = useCart();

  const goToCheckout = () => {
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
              {products.map((product, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Table.TR key={index}>
                  <Table.TD>{product.quantity}</Table.TD>
                  <Table.TD>{product.name}</Table.TD>
                  <Table.TD>
                    {product.promotions.length
                      ? [...applyPromotions(product)].map((offer) => (
                          <>
                            {`${toCurrency(offer.price)} (x${offer.quantity})`}
                            <br />
                          </>
                        ))
                      : toCurrency(product.price)}
                  </Table.TD>
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
          <Button.Grouper>
            <BackLink />
            <Button appearance="primary" onClick={goToCheckout}>
              Checkout
            </Button>
          </Button.Grouper>
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
