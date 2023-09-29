import { useContext } from 'react';
import ContextStore from '../../context/context';

function CartCardsContainer() {
  const { pedido, setPedido } = useContext(ContextStore);

  const hadleclickAdicionar = (item: any) => {
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
  };

  const handleClickSubtrair = (item: any) => {
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
  };

  const handleClickRemover = (item: any) => {
    const updatedPedidos = pedido.pedidos
      .filter((itemPedido) => itemPedido.id !== item.id);
    setPedido({ pedidos: updatedPedidos, observacoes: pedido.observacoes });
    localStorage.setItem('pedidos', JSON.stringify(
      { pedidos: updatedPedidos, observacoes: pedido.observacoes },
    ));
  };

  return (
    <>
      {pedido.pedidos.map((item, index) => (
        <div key={ item.id + index }>
          <p>{item.name}</p>
          <p>{item.quantidade}</p>
          <p>{item.price}</p>
          <p>{item.image}</p>

          <button
            onClick={ () => handleClickRemover(item) }
          >
            remover
          </button>

          <button
            onClick={ () => hadleclickAdicionar(item) }
          >
            +
          </button>

          <button
            onClick={ () => handleClickSubtrair(item) }
          >
            -
          </button>
        </div>
      ))}
    </>
  );
}

export default CartCardsContainer;
