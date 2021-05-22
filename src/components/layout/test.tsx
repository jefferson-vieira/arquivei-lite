import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import Layout from './index';

describe('<Layout />', () => {
  it('renders Layout component', () => {
    renderWithTheme(<Layout>{Symbol('children')}</Layout>);
  });
});
