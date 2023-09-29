import { useContext, useEffect } from 'react';
import ContextStore from '../../context/context';
import CartCardsContainer from '../../componentes/CartCard';
import './carrinho.css';
import simpleOrderLinkGenerator from '../../helpers/simpleOrderLinkGenerator';

function CarrinhoDePedidos() {
  const { pedido, setPedido } = useContext(ContextStore);

  useEffect(
    () => {
      const storedPedidos = JSON.parse(localStorage.getItem('pedidos') as string);
      if (!storedPedidos) {
        localStorage.setItem('pedidos', JSON.stringify(pedido));
        return;
      }
      setPedido(storedPedidos);
    },
    [],
  );

  const handleClickSendOrder = () => {
    simpleOrderLinkGenerator(pedido);
    localStorage.removeItem('pedidos');
    setPedido({ pedidos: [], observacoes: '' });
  };

  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setPedido({ pedidos: pedido.pedidos, observacoes: value });
  };

  return (
    <div>
      <h1>Carrinho de Pedidos</h1>
      <CartCardsContainer />
      <h3>
        observacoes:
      </h3>
      <div className="">
        <textarea
          onChange={ handleChanges }
          value={ pedido.observacoes }
          name="text_observacoes"
          id="text_observacoes"
        />
        <label htmlFor="text_observacoes">Comments</label>
      </div>

      <button
        type="button"
        onClick={ () => handleClickSendOrder() }
      >
        Enviar Pedido
      </button>
    </div>
  );
}

export default CarrinhoDePedidos;
