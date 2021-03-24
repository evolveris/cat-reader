import StyledNav from './Nav.styled';
import { Context } from './../../store/store';
import { useContext } from 'react';

function Nav () {
    const [state, dispatch] = useContext(Context);
    return (
      <StyledNav>
       <h1>CatReader</h1>
       <p>{state.fetchingBooks ? `Fetching books...` : `Reading log`}</p>
      </StyledNav>
    );
}
  
export default Nav;