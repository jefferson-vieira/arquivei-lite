import faker from 'faker';

import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import Input from './index';

jest.mock('react-input-mask', () => () => <div data-testid="masked-input" />);

describe('<Input />', () => {
  it('renders Input component', () => {
    const labelText = faker.random.word();

    const { getByText } = renderWithTheme(<Input label={labelText} />);

    expect(getByText(labelText)).toBeInTheDocument();
  });

  it('renders MaskedInput component', async () => {
    const { getByTestId } = renderWithTheme(
      <Input label={faker.random.word()} mask={faker.random.word()} />
    );

    expect(getByTestId('masked-input')).toBeInTheDocument();
  });
});
