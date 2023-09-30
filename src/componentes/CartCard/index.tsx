import { useContext } from 'react';
import ContextStore from '../../context/context';

import styles from './cartcard.module.css';

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
        <section
          className={ styles.card }
          key={ item.id + index }
        >
          <h4 className={ styles.title }>{item.name}</h4>

          <div className={ styles.action }>
            <button
              className={ styles.buttonRemover }
              onClick={ () => handleClickRemover(item) }
            >
              Remover
            </button>

            <section className={ styles.quantidadeAction }>

              <button
                className={ styles.buttonQuantidade }
                onClick={ () => hadleclickAdicionar(item) }
              >
                +
              </button>
              <p className={ styles.quantidade }>{`${item.quantidade} Un.`}</p>
              <button
                className={ styles.buttonQuantidade }
                onClick={ () => handleClickSubtrair(item) }
              >
                -
              </button>
            </section>
          </div>

          <div className={ styles.price }>
            <p>
              {`R$ ${Number(item.price * item.quantidade)
                .toFixed(2).replace('.', ',')}`}
            </p>
          </div>

        </section>
      ))}
    </>
  );
}

export default CartCardsContainer;
