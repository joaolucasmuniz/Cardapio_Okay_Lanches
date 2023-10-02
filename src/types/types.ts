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
