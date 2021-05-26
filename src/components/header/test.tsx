import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import Header from './index';

describe('<Header />', () => {
  it('renders Header component', () => {
    renderWithTheme(<Header>{Symbol('children')}</Header>);
  });
});
