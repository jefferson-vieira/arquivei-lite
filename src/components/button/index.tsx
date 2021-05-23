import styled from 'styled-components';

import { theme } from '../../styles';

type ButtonProps = {
  children: string;
  appearance: keyof typeof theme.colors;
} & React.ComponentPropsWithoutRef<'button'>;

const StyledButton = styled.button<Pick<ButtonProps, 'appearance'>>`
  font: ${(props) => props.theme.fonts.cta};
  color: white;
  text-transform: uppercase;

  background: ${(props) => props.theme.colors[props.appearance]};
  border: ${(props) => props.theme.colors[props.appearance]};
  border-radius: 20px;

  height: 40px;
  width: 100%;
  padding: 0 32px;

  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme.colors.grey};
    border: ${(props) => props.theme.colors.grey};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
