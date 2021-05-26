import faker from 'faker';

import toCurrency from './index';

describe('toCurrency', () => {
  it('should format number to BRL currency', () => {
    const number = faker.commerce.price().replace('.', ',');

    const expected = `R$\xa0${number}`;

    expect(toCurrency(parseFloat(number))).toBe(expected);
  });
});
