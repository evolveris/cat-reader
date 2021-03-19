import StyledMain from './Main.styled';

function Main ({ children}) {
    return (
      <StyledMain>
        {children}
      </StyledMain>
    );
}
  
export default Main;