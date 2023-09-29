import { createContext } from 'react';
import { ObjetoPedido } from '../types/types';

type Context = {
  pedido: ObjetoPedido;
  setPedido: (pedido: ObjetoPedido) => void
};

const ContextStore = createContext({} as Context);

export default ContextStore;
