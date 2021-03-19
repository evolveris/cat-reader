import './App.css';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import ListingWrapper from './components/ListingWrapper/ListingWrapper';

function App() {
  return (
    <>
      <Nav title="CatReader"/>
      <Main>
        <ListingWrapper/>
      </Main>
    </>
  );
}

export default App;
