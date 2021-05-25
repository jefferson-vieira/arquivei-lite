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
  QuantityInput,
  Purchase,
  BuyButton,
} from './style';

const DECIMAL_RADIX = 10;

type ProductProps = Omit<Product, 'quantity'>;

type ProductHeroProps = {
  icon: StyledIcon;
} & ProductProps;

const ProductHero: React.FC<ProductHeroProps> = ({
  icon,
  name,
  price,
  promotions,
}) => {
  const router = useRouter();

  const { setProducts } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  const handleClickBuy = () => {
    setProducts([
      {
        name,
        price,
        promotions,
        quantity,
      },
    ]);

    router.push('/summary');
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Icon as={icon} size="8rem" />
      <span>
        <Price>{toCurrency(price)}</Price> por consulta
      </span>
      {promotions && (
        <Promotion>
          Promoção:
          {promotions.map((promotion, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              <br />
              <span>
                {`${toCurrency(promotion.price)} nas primeiras ${
                  promotion.quantity
                } uni.`}
              </span>
            </React.Fragment>
          ))}
        </Promotion>
      )}
      <Purchase>
        <Button
          appearance="primary"
          title="Comprar menos"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity < 2}
        >
          -
        </Button>
        <QuantityInput
          type="number"
          value={quantity}
          onChange={(e) =>
            handleChangeQuantity(parseInt(e.target.value, DECIMAL_RADIX))
          }
        />
        <Button
          appearance="primary"
          title="Comprar mais"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </Purchase>
      <BuyButton
        appearance="primary"
        title="Comprar consultas"
        onClick={handleClickBuy}
      >
        Comprar
      </BuyButton>
    </Container>
  );
};

export default ProductHero;
