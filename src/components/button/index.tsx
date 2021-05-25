import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles';

type StyledProps = {
  $alt?: boolean;
  appearance: keyof typeof theme.colors;
};

type ButtonProps = {
  children: string;
} & React.ComponentPropsWithoutRef<'button'> &
  StyledProps;

type CompoundProps = {
  Grouper: React.ComponentType;
} & React.FC<ButtonProps>;

const StyledButton = styled.button<StyledProps>`
  font: ${(props) => props.theme.fonts.cta};
  text-transform: uppercase;

  color: ${(props) =>
    props.$alt ? props.theme.colors[props.appearance] : '#fff'};
  background: ${(props) =>
    props.$alt ? '#fff' : props.theme.colors[props.appearance]};
  border: 2px solid ${(props) => props.theme.colors[props.appearance]};
  border-radius: 20px;

  height: 40px;
  width: 100%;
  padding: 0 32px;

  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme.colors.grey};
    border: 2px solid ${(props) => props.theme.colors.grey};
  }
`;

const Grouper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => React.Children.count(props.children)},
    1fr
  );
  grid-column-gap: 1rem;
`;

const Button: CompoundProps = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.Grouper = Grouper;

export default Button;
