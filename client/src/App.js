import './App.css';
import { ThemeProvider } from 'styled-components';
import { COLORS, FONT_SIZES } from './components/constants';
import Store from './store/store';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import ListingWrapper from './components/ListingWrapper/ListingWrapper';

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, fontSizes: FONT_SIZES }}>
      <Store>
        <Nav/>
        <Main>
          <ListingWrapper/>
        </Main>
      </Store>
    </ThemeProvider>
  );
}

export default App;
