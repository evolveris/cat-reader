import StyledNav from './Nav.styled';

function Nav ({ title, subtitle }) {
    return (
      <StyledNav>
       <h1>{title}</h1>
       <p>{subtitle}</p>
      </StyledNav>
    );
}
  
export default Nav;