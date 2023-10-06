export type Pedido = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  notes: string;
  id_pedido?: number;
};

export type ObjetoPedido = {
  pedidos: Pedido[];
};

export type FormInfo = {
  metodo_de_entrega?: string;
  metodo_de_pagamento?: string;
};
