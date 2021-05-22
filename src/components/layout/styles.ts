import { Heart } from '@styled-icons/fa-solid';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Header = styled.header`
  font: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.primary};
`;

export const Footer = styled.footer`
  text-align: center;
`;

export const HeartIcon = styled(Heart)`
  width: 1.25rem;
  height: 1.25rem;
  color: red;
`;

export const Anchor = styled.a`
  font-size: 16px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
`;
