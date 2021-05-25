import styled from 'styled-components';

import Button from '../button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

  max-width: 300px;

  padding: 1rem;
`;

export const Title = styled.header`
  font: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.extraDark};
  text-align: center;
`;

export const Icon = styled.i`
  color: ${(props) => props.theme.colors.primary};
  margin: 1rem auto;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Promotion = styled.div`
  margin-top: 1rem;
`;

export const QuantityInput = styled.input`
  text-align: center;

  width: 100%;
  height: 40px;

  border: none;

  /* stylelint-disable property-no-vendor-prefix */
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* stylelint-enable */
`;

export const Purchase = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;

  margin-top: 1rem;
`;

export const BuyButton = styled(Button)`
  margin-top: 1rem;
`;
