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
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();

  useEffect(
    () => {
      const storedPedidos = JSON.parse(localStorage.getItem('pedidos') as string);
      if (!storedPedidos) {
        localStorage.setItem('pedidos', JSON.stringify({ pedidos: [], observacoes: '' }));
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
      setQuantidade((prevState) => prevState + 1);
    } else if (adicionarOuRemover === 'remover' && quantidade > 1) {
      setQuantidade((prevState) => prevState - 1);
    }
  };
  console.log(pedido);
  const handleClickComprar = () => {
    const novoPedido = {
      pedidos: [
        {
          id: Number(id),
          name,
          price,
          quantidade,
          image,
        },
      ],
      observacoes: '',
    };

    simpleOrderLinkGenerator(novoPedido);
  };

  const handleClickAdicionarAoPedido = () => {
    // Crie um novo pedido com base nos dados do produto e na quantidade
    const novoPedido: Pedido = {
      id: Number(id),
      name,
      price,
      quantidade,
      image,
    };

    // Verifique se o novo pedido já existe na lista de pedidos
    const pedidoExistente = pedido.pedidos.find((item) => item.id === Number(id));

    // Atualize a lista de pedidos com o novo pedido ou modifique o pedido existente
    let updatedPedidos: Pedido[] = [];

    if (pedidoExistente) {
      updatedPedidos = pedido.pedidos.map((item) => {
        if (item.id === Number(id)) {
          return { ...item, quantidade: item.quantidade + quantidade };
        }
        return item;
      });
    } else {
      updatedPedidos = [...pedido.pedidos, novoPedido];
    }

    // Atualize o objeto ObjetoPedido com a lista de pedidos atualizada
    const pedidoAtualizado: ObjetoPedido = {
      pedidos: updatedPedidos,
      observacoes: pedido.observacoes,
    };

    // Atualize o localStorage com o pedidoAtualizado
    localStorage.setItem('pedidos', JSON.stringify(pedidoAtualizado));

    // Atualize o estado global pedido com o pedidoAtualizado
    setPedido(pedidoAtualizado);

    window.alert('Pedido adicionado ao carrinho!');
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

            <p className={ styles.quantidade }>{quantidade}</p>

            <button
              className={ styles.buttonQuantidade }
              onClick={ () => handleQuantidade('adicionar') }
            >
              +
            </button>

          </section>
        </section>

        <button
          className={ styles.actionButtons }
          onClick={ handleClickAdicionarAoPedido }
        >
          {`Adicionar ao pedido 
          ( R$ ${Number(price * quantidade).toFixed(2).replace('.', ',')} )`}
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
