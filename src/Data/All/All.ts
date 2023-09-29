import BatataRecheada from '../BatataRecheada/batata-recheada';
import LanchesNoPrato from '../Lanches/Lanches-no-prato';
import HotDogs from '../Lanches/hot-dog';
import PaoDeHamburguer from '../Lanches/pao-de-hamburguer';
import PaoFrances from '../Lanches/pao-frances';
import PorcoesFrias from '../Porcoes/porcoes-frias';
import PorcoesQuentesMedias from '../Porcoes/porcoes-quentes-medias';

const All = [
  ...HotDogs,
  ...LanchesNoPrato,
  ...PaoDeHamburguer,
  ...PaoFrances,
  ...PorcoesFrias,
  ...PorcoesQuentesMedias,
  ...PorcoesQuentesMedias,
  ...BatataRecheada,
];

export default All;