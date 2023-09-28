import { useParams } from 'react-router-dom';
import { useState } from 'react';
import All from '../../Data/All/All';

function Detalhes() {
  const { id } = useParams<{ id: string }>();
  const produtoDaVez = All.find((item) => item.id === Number(id));
  const { name, ingredients, price, image } = produtoDaVez || {};

  const [quantidade, setQuantidade] = useState(1);

  const [pedido, setPedido] = useState({
    id,
    name,
    ingredients,
    price,
    image,
    quantidade,
  });

  const handleQuantidade = (adicionarOuRemover: string) => {
    if (adicionarOuRemover === 'adicionar') {
      setQuantidade((prevState) => prevState + 1);
      setPedido((prevState) => ({
        ...prevState,
        quantidade: prevState.quantidade + 1,
      }));
    } else if (adicionarOuRemover === 'remover' && quantidade > 1) {
      setQuantidade((prevState) => prevState - 1);
      setPedido((prevState) => ({
        ...prevState,
        quantidade: prevState.quantidade - 1,
      }));
    }
  };

  return (
    <div>
      <h1>Detalhes</h1>
      <p>{id}</p>
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{price}</p>
      <p>{image}</p>
      <button>adicionar ao pedido</button>
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

      <button>
        comprar
      </button>

      <button>
        ir para o carrinho
      </button>
    </div>
  );
}

export default Detalhes;

// vou colocar no estado global do context api os pedidos e a quantidade de cada pedido e o total do pedido a estrutura como vai ficar:
// {
//   pedidos: [
//     {
//       id: 1,
//       name: 'nome do produto',
//       price: 10,
//       quantidade: 2,
//      image: 'url da imagem',
//     },
//     {
//       id: 2,
//       name: 'nome do produto',
//       price: 10,
//       quantidade: 2,
//      image: 'url da imagem',
//     },
// //     {
//   Observacoes: 'sem cebola'
// }
//
//   ],
