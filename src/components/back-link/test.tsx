import { fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import renderWithTheme from '../../utils/tests/helpers/renderWithTheme';
import BackLink from './index';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe('<BackLink />', () => {
  it('renders BackLink component', () => {
    renderWithTheme(<BackLink />);
  });

  it('should navigate on BackLink is clicked', () => {
    const { getByText } = renderWithTheme(<BackLink />);

    fireEvent.click(getByText('Voltar'));

    expect(useRouter().back).toHaveBeenCalled();
  });
});
