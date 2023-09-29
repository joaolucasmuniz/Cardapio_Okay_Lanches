import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import All from '../../Data/All/All';
import { Pedido } from '../../types/types';
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
      setPedido({ pedidos: storedPedidos, observacoes: pedido.observacoes });
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

    // Atualize o array de pedidos com o novo pedido ou modifique o pedido existente
    let updatedPedidos: Pedido[] = [];
    const pedidoExistente = pedido.pedidos.find((item) => item.id === Number(id));

    // Se o pedido existir, atualize a quantidade
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
    // Atualize o localStorage com os pedidos atualizados
    localStorage.setItem('pedidos', JSON.stringify(
      { pedidos: updatedPedidos, observacoes: pedido.observacoes },
    ));

    // Atualize o estado de pedido com os pedidos atualizados
    setPedido({ pedidos: updatedPedidos, observacoes: pedido.observacoes });
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
