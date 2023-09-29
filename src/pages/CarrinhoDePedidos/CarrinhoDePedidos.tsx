import { useContext, useEffect } from 'react';
import ContextStore from '../../context/context';

function CarrinhoDePedidos() {
  const { pedido, setPedido } = useContext(ContextStore);

  useEffect(
    () => {
      const storedPedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
      if (!storedPedidos) return;
      setPedido(storedPedidos);
    },
    [],
  );

  return (
    <div>
      <h1>Carrinho de Pedidos</h1>
      {pedido.pedidos.map((item, index) => (
        <div key={ item.id + index }>
          <p>{item.name}</p>
          <p>{item.quantidade}</p>
          <p>{item.price}</p>
          <p>{item.image}</p>

          <button
            onClick={ () => {
              const updatedPedidos = pedido.pedidos
                .filter((itemPedido) => itemPedido.id !== item.id);
              setPedido({ pedidos: updatedPedidos, observacoes: pedido.observacoes });
              localStorage.setItem('pedidos', JSON.stringify(
                { pedidos: updatedPedidos, observacoes: pedido.observacoes },
              ));
            } }
          >
            remover
          </button>

          <button
            onClick={ () => {
              const updatedPedidos = pedido.pedidos.map((itemPedido) => {
                if (itemPedido.id === item.id) {
                  return { ...itemPedido, quantidade: itemPedido.quantidade + 1 };
                }
                return itemPedido;
              });
              setPedido({ pedidos: updatedPedidos, observacoes: pedido.observacoes });
              localStorage.setItem('pedidos', JSON.stringify(
                { pedidos: updatedPedidos, observacoes: pedido.observacoes },
              ));
            } }
          >
            +
          </button>

          <button
            onClick={ () => {
              const updatedPedidos = pedido.pedidos.map((itemPedido) => {
                if (itemPedido.id === item.id && itemPedido.quantidade > 1) {
                  return { ...itemPedido, quantidade: itemPedido.quantidade - 1 };
                }
                return itemPedido;
              });
              setPedido({ pedidos: updatedPedidos, observacoes: pedido.observacoes });
              localStorage.setItem('pedidos', JSON.stringify(
                { pedidos: updatedPedidos, observacoes: pedido.observacoes },
              ));
            } }
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default CarrinhoDePedidos;
