/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from '../../../styles';

export default (Component: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
};
