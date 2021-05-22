import { Heart } from '@styled-icons/fa-solid';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
`;

export const Header = styled.header`
  font: ${(props) => props.theme.fonts.hero};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Main = styled.main`
  margin: 3rem 0;
`;

export const Footer = styled.footer`
  text-align: center;
`;

export const HeartIcon = styled(Heart)`
  color: red;
`;

export const Anchor = styled.a`
  font-size: 16px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
`;
