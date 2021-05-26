import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import Table from './index';

describe('<Table />', () => {
  it('renders Table component', () => {
    renderWithTheme(<Table>{Symbol('children')}</Table>);
  });

  it('renders THead component', () => {
    renderWithTheme(
      <Table>
        <Table.THead>{Symbol('children')}</Table.THead>
      </Table>
    );
  });

  it('renders TBody component', () => {
    renderWithTheme(
      <Table>
        <Table.TBody>{Symbol('children')}</Table.TBody>
      </Table>
    );
  });

  it('renders TFoot component', () => {
    renderWithTheme(
      <Table>
        <Table.TFoot>{Symbol('children')}</Table.TFoot>
      </Table>
    );
  });

  it('renders TH component', () => {
    renderWithTheme(
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>{Symbol('children')}</Table.TH>
          </Table.TR>
        </Table.THead>
      </Table>
    );
  });

  it('renders TR component', () => {
    renderWithTheme(
      <Table>
        <Table.TBody>
          <Table.TR>{Symbol('children')}</Table.TR>
        </Table.TBody>
      </Table>
    );
  });

  it('renders TD component', () => {
    renderWithTheme(
      <Table>
        <Table.TBody>
          <Table.TR>
            <Table.TD>{Symbol('children')}</Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    );
  });
});
