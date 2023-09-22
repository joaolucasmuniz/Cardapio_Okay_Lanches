import { Typography } from '@mui/material';
import HomeCard from '../../componentes/HomeCard.tsx';
import InformationWall from '../../componentes/InformationWall/InformationWall';
import styles from './Home.module.css';

import icon from '../../images/HomeCards/HomePage.png';

const CardData = [
  { name: 'Lanches', image: icon, link: '/lanches' },
  { name: 'Bebidas', image: icon, link: '/bebidas' },
  { name: 'Porções', image: icon, link: '/porcoes' },
  { name: 'Batata Recheada', image: icon, link: '/batata-recheada' },
];

function Home() {
  return (

    <section className={ styles.homeContainer }>
      <div className={ styles.homeContent }>
        <h1 className={ styles.homeTitle }>
          Bem vindo ao cardápio
          <br />
          Okay Lanches!
        </h1>
        <p className={ styles.homeText }>
          Aqui você encontra os melhores lanches, porções, bebidas e batatas
          recheadas de Amparo!
        </p>
      </div>
      <div className={ styles.InformationWallContainer }>
        <InformationWall />
      </div>

      <div>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={ { marginTop: '2rem' } }
        >
          Conheça nossos produtos
        </Typography>

        {
          CardData.map((card) => (
            <HomeCard
              key={ card.name }
              image={ card.image }
              title={ card.name }
              link={ card.link }
            />
          ))
        }
      </div>

    </section>
  );
}

export default Home;
