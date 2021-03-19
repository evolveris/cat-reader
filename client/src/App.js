import './App.css';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import ListingWrapper from './components/ListingWrapper/ListingWrapper';

function App() {
  return (
    <>
      <Nav>
        <h1>CatReader</h1>
      </Nav>
      <Main>
        <ListingWrapper/>
      </Main>
    </>
  );
}

export default App;
