import './App.css';
import { useEffect } from 'react';
import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

function App() {
  
  useEffect(() => {   
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => console.log(data));
   }, []);

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
