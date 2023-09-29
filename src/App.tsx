import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import BatataRecheada from './pages/Batata_Recheada';
import Porcoes from './pages/Porcoes';
import Bebidas from './pages/Bebidas';
import Lanches from './pages/Lanches';
import Home from './pages/Home';
import Layout from './componentes/Layout';
import ScrollToTop from './helpers/scrollUp';
import ContextStore from './context/context';
import { ObjetoPedido } from './types/types';
import Detalhes from './pages/Infos';
import CarrinhoDePedidos from './pages/CarrinhoDePedidos/CarrinhoDePedidos';

function App() {
  const [pedido, setPedido] = useState<ObjetoPedido>({ pedidos: [], observacoes: '' });
  return (
    <ContextStore.Provider
      value={ {
        pedido,
        setPedido,
      } }
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/lanches" element={ <Lanches /> } />
          <Route path="/bebidas" element={ <Bebidas /> } />
          <Route path="/porcoes" element={ <Porcoes /> } />
          <Route path="/batata-recheada" element={ <BatataRecheada /> } />
          <Route path="/detalhes/:id" element={ <Detalhes /> } />
          <Route path="/pedidos" element={ <CarrinhoDePedidos /> } />
        </Route>
      </Routes>
    </ContextStore.Provider>
  );
}

export default App;
