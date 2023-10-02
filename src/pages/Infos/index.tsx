import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import All from '../../Data/All/All';
import { ObjetoPedido, Pedido } from '../../types/types';
import simpleOrderLinkGenerator from '../../helpers/simpleOrderLinkGenerator';
import ContextStore from '../../context/context';

import styles from './infos.module.css';

function Detalhes() {
  const { id } = useParams<{ id: string }>();
  const { pedido, setPedido } = useContext(ContextStore);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  useEffect(
    () => {
      const storedPedidos = JSON.parse(localStorage.getItem('pedidos') as string);
      if (!storedPedidos) {
        localStorage.setItem('pedidos', JSON.stringify({ pedidos: [] }));
        return;
      }
      setPedido(storedPedidos);
    },
    [],
  );

  const produtoDaVez = All.find((item) => item.id === Number(id));
  if (!produtoDaVez) {
    return <div>Produto não encontrado</div>;
  }

  const { name, ingredients, price, image } = produtoDaVez;

  const handleQuantidade = (adicionarOuRemover: string) => {
    if (adicionarOuRemover === 'adicionar') {
      setQuantity((prevState) => prevState + 1);
    } else if (adicionarOuRemover === 'remover' && quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const handleClickComprar = () => {
    const novoPedido = {
      pedidos: [
        {
          id: Number(id),
          name,
          price,
          quantity,
          image,
          notes,
        },
      ],
    };

    simpleOrderLinkGenerator(novoPedido);
  };

  const handleClickAdicionarAoPedido = () => {
    // Crie um novo pedido com base nos dados do produto e na quantidade
    const novoPedido: Pedido = {
      id: Number(id),
      id_pedido: Date.now(),
      name,
      price,
      quantity,
      image,
      notes,
    };

    // Atualize a lista de pedidos com o novo pedido ou modifique o pedido existente
    let updatedPedidos: Pedido[] = [];

    updatedPedidos = [...pedido.pedidos, novoPedido];

    // Atualize o objeto ObjetoPedido com a lista de pedidos atualizada
    const pedidoAtualizado: ObjetoPedido = {
      pedidos: updatedPedidos,
    };

    // Atualize o localStorage com o pedidoAtualizado
    localStorage.setItem('pedidos', JSON.stringify(pedidoAtualizado));

    // Atualize o estado global pedido com o pedidoAtualizado
    setPedido(pedidoAtualizado);

    window.alert('Pedido adicionado ao carrinho!');
  };

  const handleChangeNotes = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setNotes(value);
  };

  return (
    <main className={ styles.mainContainer }>
      <section className={ styles.container }>

        <h1 className={ styles.titles }>{name}</h1>

        <p className={ styles.ingredients }>{ingredients}</p>

        <section className={ styles.quantidadeContainer }>
          <p>Quantidade:</p>
          <section className={ styles.quantidadeAction }>

            <button
              className={ styles.buttonQuantidade }
              onClick={ () => handleQuantidade('remover') }
            >
              -
            </button>

            <p className={ styles.quantidade }>{quantity}</p>

            <button
              className={ styles.buttonQuantidade }
              onClick={ () => handleQuantidade('adicionar') }
            >
              +
            </button>

          </section>
        </section>

        <section className={ styles.textareaContainer }>
          <label htmlFor="noteInput">Observações:</label>
          <textarea
            className={ styles.notesInput }
            id="noteInput"
            placeholder="Ex: Tirar a cebola"
            value={ notes }
            onChange={ (e) => handleChangeNotes(e) }
          />

        </section>

        <button
          className={ styles.buttonAddToOrder }
          onClick={ handleClickAdicionarAoPedido }
        >
          {`ADICIONAR AO PEDIDO
          (${Number(price * quantity)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`}
        </button>

        <section className={ styles.actionButtonsContainer }>
          <button
            className={ styles.actionButtons }
            onClick={ handleClickComprar }
          >
            Pedir agora
          </button>

          <button
            className={ styles.actionButtons }
            onClick={ () => navigate('/pedidos') }
          >
            Ir para os pedidos
          </button>
        </section>

      </section>
    </main>
  );
}

export default Detalhes;
