import StyledNav from './Nav.styled';

function Nav ({ title }) {
    return (
      <StyledNav>
       <h1>{title}</h1>
      </StyledNav>
    );
}
  
export default Nav;