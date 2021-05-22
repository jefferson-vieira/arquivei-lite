import { StyledIcon } from '@styled-icons/styled-icon';
import React, { useState } from 'react';

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
  title: string;
  price: number;
  promotions?: [number, number][];
  icon: StyledIcon;
};

const Product: React.FC<ProductProps> = ({
  title,
  price,
  promotions,
  icon,
}) => {
  const [qty, setQty] = useState(1);

  const handleChangeQty = (newQty: number) => {
    setQty(newQty > 0 ? newQty : 1);
  };

  const IconComponent = Icon(icon);

  return (
    <Container>
      <Title>{title}</Title>
      <IconComponent size="8rem" />
      <span>
        <Price>{toCurrency(price)}</Price> por consulta
      </span>
      {promotions && (
        <Promotion>
          Promoção:
          {promotions.map(([newPrice, quantity], index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              <br />
              <span>
                {toCurrency(newPrice)} nas primeiras {quantity} uni.
              </span>
            </React.Fragment>
          ))}
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
      <BuyButton appearance="primary" title="Comprar consultas">
        Comprar
      </BuyButton>
    </Container>
  );
};

export default Product;
