import faker from 'faker';

import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import Button from './index';

describe('<Button />', () => {
  it('renders Button component', () => {
    renderWithTheme(
      <Button appearance="primary">{faker.random.word()}</Button>
    );
  });

  it('renders Grouper component', () => {
    renderWithTheme(
      <Button.Grouper>
        <Button appearance="primary">{faker.random.word()}</Button>
      </Button.Grouper>
    );
  });

  it('should Grouper has enough columns for all buttons', () => {
    const { getByTestId } = renderWithTheme(
      <Button.Grouper data-testid="button-grouper">
        <Button appearance="primary">{faker.random.word()}</Button>
      </Button.Grouper>
    );

    expect(getByTestId('button-grouper')).toHaveStyleRule(
      'grid-template-columns',
      'repeat( 1,1fr )'
    );
  });
});
