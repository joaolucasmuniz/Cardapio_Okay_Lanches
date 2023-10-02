import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextStore from '../../context/context';
import CartCardsContainer from '../../componentes/CartCard';
import './carrinho.css';
import simpleOrderLinkGenerator from '../../helpers/simpleOrderLinkGenerator';

function CarrinhoDePedidos() {
  const { pedido, setPedido } = useContext(ContextStore);
  const navigate = useNavigate();

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
    setPedido({ pedidos: [] });
  };

  if (pedido.pedidos.length === 0) {
    return (
      <div>
        <h1>Carrinho de Pedidos</h1>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <button
          type="button"
          onClick={ () => navigate('/') }
        >
          voltar para o pagina inicial
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrinho de Pedidos</h1>
      <CartCardsContainer />
      <p>
        {`Total: ${pedido.pedidos
          .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
      </p>

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
