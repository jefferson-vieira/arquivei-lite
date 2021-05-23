import styled from 'styled-components';

export const Header = styled.header`
  font: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.extraDark};
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font: inherit;
  margin-bottom: 1rem;
`;

export const HR = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.extraDark};
`;
