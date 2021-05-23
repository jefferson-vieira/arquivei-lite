import { StyledIcon } from '@styled-icons/styled-icon';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Product from '../../models/product';
import { useCart } from '../../store/cart-context';
import toCurrency from '../../utils/formatters/currency';
import Button from '../button';
import {
  Container,
  Title,
  Icon,
  Price,
  Promotion,
  QtyInput,
  Purchase,
  BuyButton,
} from './style';

type ProductProps = {
  icon: StyledIcon;
} & Omit<Product, 'quantity'>;

const ProductHero: React.FC<ProductProps> = ({
  name,
  price,
  promotions,
  icon,
}) => {
  const router = useRouter();

  const { setProducts } = useCart();

  const [qty, setQty] = useState(1);

  const handleChangeQty = (newQty: number) => {
    setQty(newQty > 0 ? newQty : 1);
  };

  const handleBuy = () => {
    setProducts([
      {
        name,
        price,
        promotions,
        quantity: qty,
      },
    ]);

    router.push('/summary');
  };

  const IconComponent = Icon(icon);

  return (
    <Container>
      <Title>{name}</Title>
      <IconComponent size="8rem" />
      <span>
        <Price>{toCurrency(price)}</Price> por consulta
      </span>
      {promotions && (
        <Promotion>
          Promoção:
          {promotions.map(
            (
              { price: promotionalPrice, quantity: promotionalQuantity },
              index
            ) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <br />
                <span>
                  {toCurrency(promotionalPrice)} nas primeiras{' '}
                  {promotionalQuantity} uni.
                </span>
              </React.Fragment>
            )
          )}
        </Promotion>
      )}
      <Purchase>
        <Button
          appearance="primary"
          title="Comprar menos"
          onClick={() => setQty(qty - 1)}
          disabled={qty < 2}
        >
          -
        </Button>
        <QtyInput
          type="number"
          value={qty}
          onChange={(e) => handleChangeQty(parseInt(e.target.value, 10))}
        />
        <Button
          appearance="primary"
          title="Comprar mais"
          onClick={() => setQty(qty + 1)}
        >
          +
        </Button>
      </Purchase>
      <BuyButton
        appearance="primary"
        title="Comprar consultas"
        onClick={handleBuy}
      >
        Comprar
      </BuyButton>
    </Container>
  );
};

export default ProductHero;
