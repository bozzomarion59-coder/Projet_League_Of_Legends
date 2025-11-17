import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './assets 2/Pages/HomePage';
import NavBar from './assets 2/Components/NavBar';
import ChampionsPage from './assets 2/Pages/ChampionsPage';
import { Container } from 'react-bootstrap';
import ChampionDetailsPage from './assets 2/Pages/ChampionDetails';
import ItemsPage from './assets 2/Pages/ItemsPage';
import ItemDetails from './assets 2/Pages/ItemDetails';
import RegionsPage from './assets 2/Pages/RegionsPage';
import RegionDetails from './assets 2/Pages/RegionDetails';


function App() {

  return <>

    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/champions' element={<ChampionsPage />} />
          <Route path='/champions/:id' element={<ChampionDetailsPage />} />
          <Route path='/items' element={<ItemsPage />} />
          <Route path='/items/:id' element={<ItemDetails />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path='/regions/:id' element={<RegionDetails />} />


        </Routes>
      </Container>
    </BrowserRouter>

  </>

}

export default App;
