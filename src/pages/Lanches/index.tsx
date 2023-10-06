import PaoDeHamburguer from '../../Data/Lanches/pao-de-hamburguer';
import PaoFrances from '../../Data/Lanches/pao-frances';
import HotDogs from '../../Data/Lanches/hot-dog';
import LanchesNoPrato from '../../Data/Lanches/Lanches-no-prato';

import CardOptions from '../../componentes/Card/card';

import styles from './lanches.module.css';

function Lanches() {
  const navButtons = [
    { name: 'Pão de Hamburguer', id: 'hamburguer' },
    { name: 'Pão Francês', id: 'frances' },
    { name: 'Hot Dogs', id: 'hotDogs' },
    { name: 'Lanches no Prato', id: 'lanchesNoPrato' },
  ];
  return (
    <div className={ styles.mainContainer }>
      <nav className={ styles.navTags }>
        {navButtons.map((item, index) => (
          <a
            key={ index }
            href={ `#${item.id}` }
          >
            <button
              className={ styles.tagButton }
              type="button"
            >
              {item.name}
            </button>
          </a>
        ))}
      </nav>

      <section className={ styles.section }>
        <div
          className={ styles.titleContainer }
        >
          <h2 id="hamburguer" className={ styles.titles }>
            Pão de Hamburguer
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {PaoDeHamburguer.map((item) => (
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

      <section className={ styles.section }>
        <div
          className={ styles.titleContainer }
        >
          <h2 id="frances" className={ styles.titles }>
            Pão Francês
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {PaoFrances.map((item) => (
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

      <section className={ styles.section }>
        <div
          className={ styles.titleContainer }
        >
          <h2 id="hotDogs" className={ styles.titles }>
            Hot Dogs
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {HotDogs.map((item) => (
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

      <section className={ styles.section }>
        <div
          className={ styles.titleContainer }
        >
          <h2 id="lanchesNoPrato" className={ styles.titles }>
            Lanches no Prato
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {LanchesNoPrato.map((item) => (
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

export default Lanches;
