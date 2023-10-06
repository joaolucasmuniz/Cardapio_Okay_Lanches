import { useContext, useEffect, useState } from 'react';
import ContextStore from '../../context/context';
import CartCardsContainer from '../../componentes/CartCard';
import simpleOrderLinkGenerator from '../../helpers/simpleOrderLinkGenerator';
import { FormInfo } from '../../types/types';

import styles from './carrinho.module.css';
import CartNotFound from '../../componentes/CartNotFound';

function CarrinhoDePedidos() {
  const { pedido, setPedido } = useContext(ContextStore);
  const [formInfos, setFormInfos] = useState({});

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

  if (pedido.pedidos.length === 0) {
    return (
      <CartNotFound />
    );
  }

  const handleChangeFormInfos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfos({ ...formInfos, [name]: value });
  };

  const handleClickSendOrder = () => {
    simpleOrderLinkGenerator(pedido, formInfos as FormInfo);
    localStorage.removeItem('pedidos');
    setPedido({ pedidos: [] });
  };

  return (
    <main>
      <CartCardsContainer />

      <form className={ styles.formContainer }>
        <div className={ styles.metodeContainer }>
          <p> Forma de entrega:</p>
          <div className={ styles.radioContainer }>
            <label htmlFor="retirada" className="label">
              <input
                type="radio"
                name="metodo_de_entrega"
                id="retirada"
                value="Retirada"
                className="input"
                onChange={ (e) => handleChangeFormInfos(e) }
              />
              Retirada
            </label>
            <label htmlFor="entrega" className="label">
              <input
                type="radio"
                name="metodo_de_entrega"
                id="entrega"
                value="Entrega"
                className="input"
                onChange={ (e) => handleChangeFormInfos(e) }
              />
              Entrega
            </label>
          </div>
        </div>
        <div className={ styles.metodeContainer }>
          <p> Forma de pagamento:</p>
          <div className={ styles.radioContainer }>
            <label htmlFor="dinheiro" className="label">
              <input
                type="radio"
                name="metodo_de_pagamento"
                id="dinheiro"
                value="Dinheiro"
                className="input"
                onChange={ (e) => handleChangeFormInfos(e) }
              />
              Dinheiro
            </label>
            <label htmlFor="cartao" className="label">
              <input
                type="radio"
                name="metodo_de_pagamento"
                id="cartao"
                value="Cartão"
                className="input"
                onChange={ (e) => handleChangeFormInfos(e) }
              />
              Cartão
            </label>
            <label htmlFor="pix" className="label">
              <input
                type="radio"
                name="metodo_de_pagamento"
                id="pix"
                value="Pix"
                className="input"
                onChange={ (e) => handleChangeFormInfos(e) }
              />
              Pix
            </label>
          </div>
        </div>
      </form>

      <div className={ styles.totalContainer }>
        <p>
          {`Total: ${pedido.pedidos
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
        </p>
        <span>
          *Taxa de entrega não inclusa
        </span>
      </div>

      <div className={ styles.buttonContainer }>
        <button
          className={ styles.sendOrderButton }
          type="button"
          onClick={ () => handleClickSendOrder() }
        >
          ENVIAR PEDIDO
        </button>
      </div>
    </main>
  );
}

export default CarrinhoDePedidos;
