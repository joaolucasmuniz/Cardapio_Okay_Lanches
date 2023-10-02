import { ObjetoPedido } from '../types/types';

function simpleOrderLinkGenerator(pedido: ObjetoPedido) {
  const numeroTelefone = '5519997462506';

  const pedidoText = pedido.pedidos.map((item) => {
    return (`Nome: *${item.name}*\n
      Quantidade: ${item.quantity}
      Valor: ${(item.price * item.quantity).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}\n
      ${item.notes.length > 0 ? `Observações: ${item.notes}\n` : ''}
    ------------------------------\n`
    );
  }).join('\n');

  const mensagemCodificada = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
  ${pedidoText}
  *Total: ${pedido.pedidos
    .reduce((acc, item) => acc + (item.price * item.quantity), 0)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })}*\n`);

  const numeroTelefoneCodificado = encodeURIComponent(numeroTelefone);

  window.location.href = ` https://wa.me//${numeroTelefoneCodificado}?text=${mensagemCodificada}`;
}

export default simpleOrderLinkGenerator;
