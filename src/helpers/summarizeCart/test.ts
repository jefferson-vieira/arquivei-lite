import faker from 'faker';

import summarizeCart from './index';

describe('summarizeCart', () => {
  it.each([
    [2, 0.18],
    [1000, 90],
    [1024, 93.84],
    [2500, 370],
    [10000, 2_170],
  ])('should summarize cart', (productQuantity, expectedPrice) => {
    expect(
      summarizeCart([
        {
          name: faker.commerce.productName(),
          price: 0.24,
          quantity: productQuantity,
          promotions: [
            { price: 0.09, quantity: 1000 },
            { price: 0.16, quantity: 2000 },
          ],
        },
      ])
    ).toBe(expectedPrice);
  });
});
