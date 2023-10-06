import { useContext } from 'react';
import ContextStore from '../../context/context';

import styles from './cartcard.module.css';

function CartCardsContainer() {
  const { pedido, setPedido } = useContext(ContextStore);

  const hadleclickAdicionar = (item: any) => {
    const updatedPedidos = pedido.pedidos.map((itemPedido) => {
      if (itemPedido.id_pedido === item.id_pedido) {
        return { ...itemPedido, quantity: itemPedido.quantity + 1 };
      }
      return itemPedido;
    });
    setPedido({ pedidos: updatedPedidos });
    localStorage.setItem('pedidos', JSON.stringify(
      { pedidos: updatedPedidos },
    ));
  };

  const handleClickSubtrair = (item: any) => {
    const updatedPedidos = pedido.pedidos.map((itemPedido) => {
      if (itemPedido.id_pedido === item.id_pedido && itemPedido.quantity > 1) {
        return { ...itemPedido, quantity: itemPedido.quantity - 1 };
      }
      return itemPedido;
    });
    setPedido({ pedidos: updatedPedidos });
    localStorage.setItem('pedidos', JSON.stringify(
      { pedidos: updatedPedidos },
    ));
  };

  const handleClickRemover = (item: any) => {
    const updatedPedidos = pedido.pedidos
      .filter((itemPedido) => itemPedido.id_pedido !== item.id_pedido);
    setPedido({ pedidos: updatedPedidos });
    localStorage.setItem('pedidos', JSON.stringify(
      { pedidos: updatedPedidos },
    ));
  };

  return (
    <section className={ styles.cardsContainer }>
      {pedido.pedidos.map((item) => (
        <section
          className={ styles.card }
          key={ item.id_pedido }
        >
          <h4 className={ styles.title }>{item.name}</h4>

          <div className={ styles.action }>
            <button
              className={ styles.buttonRemover }
              onClick={ () => handleClickRemover(item) }
            >
              Remover
            </button>

            <section className={ styles.quantityAction }>

              <button
                className={ styles.buttonQuantity }
                onClick={ () => handleClickSubtrair(item) }
              >
                -
              </button>
              <p className={ styles.quantity }>{`${item.quantity} Un.`}</p>
              <button
                className={ styles.buttonQuantity }
                onClick={ () => hadleclickAdicionar(item) }
              >
                +
              </button>
            </section>
          </div>

          <div className={ styles.detailsContainer }>
            <p className={ styles.notes }>{item.notes}</p>
            <p>
              {`${Number(item.price * item.quantity).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}`}
            </p>
          </div>

        </section>
      ))}
    </section>
  );
}

export default CartCardsContainer;
