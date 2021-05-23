import { Header as StyledHeader, Title, HR } from './style';

const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <Title>{children}</Title>
      <HR />
    </StyledHeader>
  );
};

export default Header;
