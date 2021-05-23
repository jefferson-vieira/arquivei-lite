import Button from '../components/button';
import Header from '../components/header';
import Layout from '../components/layout';
import Table from '../components/table';
import toCurrency from '../utils/formatters/currency';

const Summary: React.FC = () => {
  return (
    <Layout>
      <Header>Resumo do pedido</Header>
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>Produto</Table.TH>
            <Table.TH>Preço</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD>Consultas</Table.TD>
            <Table.TD>{toCurrency(50)}</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
      <Button appearance="primary">Checkout</Button>
    </Layout>
  );
};

export default Summary;
