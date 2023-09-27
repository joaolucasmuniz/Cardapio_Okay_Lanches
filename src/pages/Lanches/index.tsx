import { Typography } from '@mui/material';
import PaoDeHamburguer from '../../Data/Lanches/pao-de-hamburguer';
import PaoFrances from '../../Data/Lanches/pao-frances';
import HotDogs from '../../Data/Lanches/hot-dog';
import LanchesNoPrato from '../../Data/Lanches/Lanches-no-prato';


import CardOptions from '../../componentes/Card/card';

import styles from './lanches.module.css';

function Lanches() {
  return (
    <div className={ styles.mainContainer }>
      <div
        className={ styles.titleContainer }
      >
        <h2>
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

      <div
        className={ styles.titleContainer }
      >
        <h2>
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

      <div
        className={ styles.titleContainer }
      >
        <h2>
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

      <div
        className={ styles.titleContainer }
      >
        <h2>
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
    </div>
  );
}

export default Lanches;
