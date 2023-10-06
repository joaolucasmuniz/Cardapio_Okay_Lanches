import CardOptions from '../../componentes/Card/card';

import styles from '../Lanches/lanches.module.css';
import PorcoesQuentesMedias from '../../Data/Porcoes/porcoes-quentes-medias';
import PorcoesQuentesInteiras from '../../Data/Porcoes/pocoes-quentes-inteiras';
import PorcoesFrias from '../../Data/Porcoes/porcoes-frias';

function Porcoes() {
  const navButtons = [
    { name: 'Porções Frias', id: 'frias' },
    { name: 'Meia - Porções Quentes', id: 'meiaQuentes' },
    { name: 'Inteira - Porções Quentes', id: 'inteiraQuentes' },
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
          <h2 id="frias" className={ styles.titles }>
            Porções Frias
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {PorcoesFrias.map((item) => (
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
          <h2 id="meiaQuentes" className={ styles.titles }>
            Meia - Porções Quentes
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {PorcoesQuentesMedias.map((item) => (
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
          <h2 id="inteiraQuentes" className={ styles.titles }>
            Inteira - Porções Quentes
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {PorcoesQuentesInteiras.map((item) => (
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

export default Porcoes;
