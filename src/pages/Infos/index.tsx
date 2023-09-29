import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import All from '../../Data/All/All';
import { ObjetoPedido, Pedido } from '../../types/types';
import simpleOrderLinkGenerator from '../../helpers/simpleOrderLinkGenerator';
import ContextStore from '../../context/context';

function Detalhes() {
  const { id } = useParams<{ id: string }>();
  const { pedido, setPedido } = useContext(ContextStore);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(
    () => {
      const storedPedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
      if (!storedPedidos) return;
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
      name,
      quantidade,
      price,
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
  };

  return (
    <div>
      <h1>Detalhes</h1>
      <p>{id}</p>
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{price}</p>
      <p>{image}</p>
      <p>
        quantidade:
        {quantidade}
      </p>

      <button
        style={ { marginLeft: '1rem' } }
        onClick={ () => handleQuantidade('adicionar') }
      >
        +
      </button>
      <button
        onClick={ () => handleQuantidade('remover') }
      >
        -
      </button>

      <button
        onClick={ handleClickComprar }
      >
        comprar
      </button>

      <button
        onClick={ handleClickAdicionarAoPedido }
      >
        adicionar ao pedido
      </button>
    </div>
  );
}

export default Detalhes;
