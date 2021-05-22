import styled from 'styled-components';

import { theme } from '../../styles';

type ButtonProps = {
  children: string;
  appearance: keyof typeof theme.colors;
} & React.ComponentPropsWithoutRef<'button'>;

const Btn = styled.button<Pick<ButtonProps, 'appearance'>>`
  font: ${(props) => props.theme.fonts.cta};
  color: white;
  text-transform: uppercase;

  background: ${(props) => props.theme.colors[props.appearance]};
  border: ${(props) => props.theme.colors[props.appearance]};
  border-radius: 20px;

  height: 40px;
  padding: 0 32px;

  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme.colors.grey};
    border: ${(props) => props.theme.colors.grey};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
