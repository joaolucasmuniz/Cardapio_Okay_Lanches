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
    setPedido({ pedidos: [], observacoes: '' });
  };

  const handleChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setPedido({ pedidos: pedido.pedidos, observacoes: value });
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
      <p>
        total:
        {pedido.pedidos.reduce((acc, curr) => acc + curr.price * curr.quantidade, 0)}
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
