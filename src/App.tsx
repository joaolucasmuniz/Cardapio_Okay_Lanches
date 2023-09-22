import { Route, Routes } from 'react-router-dom';
import './App.css';
import BatataRecheada from './pages/Batata_Recheada';
import Porcoes from './pages/Porcoes';
import Bebidas from './pages/Bebidas';
import Lanches from './pages/Lanches';
import Home from './pages/Home';
import Layout from './componentes/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/lanches" element={ <Lanches /> } />
        <Route path="/bebidas" element={ <Bebidas /> } />
        <Route path="/porcoes" element={ <Porcoes /> } />
        <Route path="/batata-recheada" element={ <BatataRecheada /> } />
      </Route>
    </Routes>
  );
}

export default App;
