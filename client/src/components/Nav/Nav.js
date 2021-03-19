import StyledNav from './Nav.styled';

function Nav ({ children}) {
    return (
      <StyledNav>
        {children}
      </StyledNav>
    );
}
  
export default Nav;