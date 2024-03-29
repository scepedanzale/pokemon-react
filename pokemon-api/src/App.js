import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import SearchPage from './pages/SearchPage';
import SinglePokemonPage from './pages/SinglePokemonPage';
import FavouritePage from './pages/FavouritePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Container fluid className='h-100 pt-3'>
            <Row className='h-100 overflow-hidden'>
              <Col xs={12} md={4} lg={3}>
                <NavbarComponent/>
              </Col>
              <Col md={8} lg={9} className='h-100'>
              <Container fluid className='main-container my-3 my-md-2'>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/search' element={<SearchPage/>}/>
                  <Route path='/pokemon/:id' element={<SinglePokemonPage/>}/>
                  <Route path='/favourites' element={<FavouritePage/>}/>
                </Routes>
              </Container>
              </Col>
            </Row>
          </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
