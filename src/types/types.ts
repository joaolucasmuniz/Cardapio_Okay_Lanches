export type Pedido = {
  id: number;
  name: string;
  price: number;
  quantidade: number;
  image: string;
};

export type ObjetoPedido = {
  pedidos: Pedido[];
  observacoes: string;
};
