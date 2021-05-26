import { renderHook, act } from '@testing-library/react-hooks/server';
import faker from 'faker';

import Product, { Offer } from '../../models/product';
import { CartProvider, useCart } from './index';

function offerFactory(): Offer {
  return {
    price: parseFloat(faker.commerce.price()),
    quantity: faker.datatype.number(),
  };
}

function productFactory(): Product {
  return {
    name: faker.commerce.productName(),
    ...offerFactory(),
    promotions: [offerFactory()],
  };
}

test('should provide products on context', () => {
  const wrapper: React.FC = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  );

  const { result, hydrate } = renderHook(() => useCart(), { wrapper });

  const products = [productFactory()];

  hydrate();

  act(() => {
    result.current.setProducts(products);
  });

  expect(result.current.products).toEqual(products);
});
