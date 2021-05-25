import { Heart } from '@styled-icons/fa-solid';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  min-height: 100%;
  max-width: ${(props) => props.theme.breakpoints.desktop.width};

  padding: 1rem;
  margin: auto;
`;

export const Header = styled.header`
  font: ${(props) => props.theme.fonts.hero};
  text-align: center;

  color: ${(props) => props.theme.colors.primary};
`;

export const Main = styled.main`
  width: 100%;
  margin: 3rem 0;
`;

export const Footer = styled.footer`
  text-align: center;

  overflow: auto;
  white-space: nowrap;
`;

export const HeartIcon = styled(Heart)`
  color: red;
`;
