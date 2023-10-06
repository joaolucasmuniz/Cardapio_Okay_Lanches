import { FormInfo, ObjetoPedido } from '../types/types';

function simpleOrderLinkGenerator(pedido: ObjetoPedido, formInfo?:FormInfo) {
  const numeroTelefone = '5519997462506';

  const pedidoText = pedido.pedidos.map((item) => {
    return (`Nome: *${item.name}*
      Quantidade: ${item.quantity}
      Valor: ${(item.price * item.quantity).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}\n
      ${item.notes.length > 0 ? `Observações: ${item.notes}\n` : ''}
      ----------------------------------`

    );
  }).join('\n');

  const mensagemCodificada = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
  ${pedidoText}
  *Total: ${pedido.pedidos
    .reduce((acc, item) => acc + (item.price * item.quantity), 0)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}*
  ${formInfo ? (`
  ${formInfo.metodo_de_entrega
      ? `Método de entrega: *${formInfo.metodo_de_entrega}*` : ''}
  ${formInfo.metodo_de_pagamento
      ? `Método de pagamento: *${formInfo.metodo_de_pagamento}*` : ''}
  `) : ''}
    `);

  const numeroTelefoneCodificado = encodeURIComponent(numeroTelefone);

  window.location.href = ` https://wa.me//${numeroTelefoneCodificado}?text=${mensagemCodificada}`;
}

export default simpleOrderLinkGenerator;
