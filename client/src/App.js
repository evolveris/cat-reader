import './App.css';
import { ThemeProvider } from 'styled-components';
import { COLORS, FONT_SIZES } from './components/constants'
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import ListingWrapper from './components/ListingWrapper/ListingWrapper';

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, fontSizes: FONT_SIZES }}>
      <Nav title="CatReader" subtitle="Liutza's reading log"/>
      <Main>
        <ListingWrapper/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
