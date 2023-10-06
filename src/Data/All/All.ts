import BatataRecheada from '../BatataRecheada/batata-recheada';
import CervejasGarrafa from '../Bebidas/Cerveja_Garrafa';
import CervejaLata from '../Bebidas/Cerveja_Lata';
import Doses from '../Bebidas/Doses';
import Refrigerantes from '../Bebidas/Refrigerantes';
import SucosCopo from '../Bebidas/Sucos_Copo';
import SucosJarra from '../Bebidas/Sucos_Jarra';
import LanchesNoPrato from '../Lanches/Lanches-no-prato';
import HotDogs from '../Lanches/hot-dog';
import PaoDeHamburguer from '../Lanches/pao-de-hamburguer';
import PaoFrances from '../Lanches/pao-frances';
import PorcoesQuentesInteiras from '../Porcoes/pocoes-quentes-inteiras';
import PorcoesFrias from '../Porcoes/porcoes-frias';
import PorcoesQuentesMedias from '../Porcoes/porcoes-quentes-medias';

const All = [
  ...HotDogs,
  ...LanchesNoPrato,
  ...PaoDeHamburguer,
  ...PaoFrances,
  ...PorcoesFrias,
  ...PorcoesQuentesMedias,
  ...PorcoesQuentesInteiras,
  ...BatataRecheada,
  ...CervejaLata,
  ...CervejasGarrafa,
  ...Doses,
  ...Refrigerantes,
  ...SucosCopo,
  ...SucosJarra,
];

export default All;
