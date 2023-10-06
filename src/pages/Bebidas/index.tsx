import CardOptions from '../../componentes/Card/card';

import styles from '../Lanches/lanches.module.css';
import SucosCopo from '../../Data/Bebidas/Sucos_Copo';
import SucosJarra from '../../Data/Bebidas/Sucos_Jarra';
import Refrigerantes from '../../Data/Bebidas/Refrigerantes';
import CervejasGarrafa from '../../Data/Bebidas/Cerveja_Garrafa';
import CervejaLata from '../../Data/Bebidas/Cerveja_Lata';
import Doses from '../../Data/Bebidas/Doses';

function Bebidas() {
  const navButtons = [
    { name: 'Sucos - Copo', id: 'sucosCopo' },
    { name: 'Sucos - Jarra', id: 'sucosJarra' },
    { name: 'Refrigerantes', id: 'refrigerantes' },
    { name: 'Cerveja - Garrafa', id: 'cervejaGarrafa' },
    { name: 'Cerveja - Lata', id: 'cervejaLata' },
    { name: 'Doses', id: 'doses' },
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
          <h2 id="sucosCopo" className={ styles.titles }>
            Sucos - Copo
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {SucosCopo.map((item) => (
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
          <h2 id="sucosJarra" className={ styles.titles }>
            Sucos - Jarra
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {SucosJarra.map((item) => (
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
          <h2 id="refrigerantes" className={ styles.titles }>
            Refrigerantes
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {Refrigerantes.map((item) => (
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
          <h2 id="cervejaGarrafa" className={ styles.titles }>
            Cerveja - Garrafa
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {CervejasGarrafa.map((item) => (
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
          <h2 id="cervejaLata" className={ styles.titles }>
            Cerveja - Lata
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {CervejaLata.map((item) => (
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
          <h2 id="doses" className={ styles.titles }>
            Doses
          </h2>
        </div>

        <div
          className={ styles.gridContainer }
        >
          <div
            className={ styles.grid }
          >
            {Doses.map((item) => (
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

export default Bebidas;
