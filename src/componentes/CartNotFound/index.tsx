import { useNavigate } from 'react-router-dom';
import styles from './cartNotFound.module.css';

function CartNotFound() {
  const navigate = useNavigate();

  return (
    <div className={ styles.container }>
      <section className={ styles.textContainer }>
        <h1>
          Você ainda não adicionou nenhum item ao seu carrinho de pedidos
        </h1>
        <p>Adicione itens ao seu carrinho para continuar</p>
        <button
          type="button"
          onClick={ () => navigate('/') }
          className={ styles.button }
        >
          Voltar a página inicial
        </button>
      </section>
    </div>
  );
}

export default CartNotFound;
