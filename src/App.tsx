import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BatataRecheada from './pages/Batata_Recheada';
import Porcoes from './pages/Porcoes';
import Bebidas from './pages/Bebidas';
import Lanches from './pages/Lanches';
import Home from './pages/Home';
import Layout from './componentes/Layout';
import ScrollToTop from './helpers/scrollUp';
import Detalhes from './pages/infos';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/lanches" element={ <Lanches /> } />
          <Route path="/bebidas" element={ <Bebidas /> } />
          <Route path="/porcoes" element={ <Porcoes /> } />
          <Route path="/batata-recheada" element={ <BatataRecheada /> } />
          <Route path="/detalhes/:id" element={ <Detalhes /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
