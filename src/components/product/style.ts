import { StyledIcon } from '@styled-icons/styled-icon';
import styled from 'styled-components';

import Button from '../button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);

  padding: 1rem;
`;

export const Title = styled.header`
  font: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.extraDark};
  text-align: center;
`;

export const Icon = (icon: StyledIcon) => styled(icon)`
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

export const QtyInput = styled.input`
  text-align: center;

  border: none;
  border-radius: 20px;
  margin: 0 0.5rem;

  height: 40px;
  width: 100%;
`;

export const Purchase = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
`;

export const BuyButton = styled(Button)`
  margin-top: 1rem;
`;
