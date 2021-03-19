import './App.css';
import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import getAllBooks from './modules/bookRepository'

function App() {
  getAllBooks();
  return (
    <>
      <Nav>
        <h1>CatReader</h1>
      </Nav>
      <Main>
        <Card>Card here</Card>
      </Main>
    </>
  );
}

export default App;
