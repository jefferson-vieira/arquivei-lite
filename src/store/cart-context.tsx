import { createContext, useContext, useState } from 'react';

import Product from '../models/product';

type Cart = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

const cartEmpty: Cart = {
  products: [],
  setProducts: (_) => _,
};

const CartContext = createContext<Cart>(cartEmpty);

export function useCart(): Cart {
  return useContext(CartContext);
}

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
