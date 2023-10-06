import BatataRecheada from '../../Data/BatataRecheada/batata-recheada';
import CardOptions from '../../componentes/Card/card';

import styles from '../Lanches/lanches.module.css';

function BatataRecheadaPage() {
  return (
    <div className={ styles.mainContainer }>

      <section className={ styles.section }>
        <div
          className={ styles.titleContainer }
        >
          <h2 id="hamburguer" className={ styles.titles }>
            Batata Recheada
          </h2>
        </div>

        <div className={ styles.gridContainer }>
          <div
            className={ styles.grid }
          >
            {BatataRecheada.map((item) => (
              <CardOptions
                key={ item.id }
                name={ item.name }
                ingredients={ item.ingredients }
                price={ item.price }
                image={ item.image }
                id={ item.id }
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default BatataRecheadaPage;
