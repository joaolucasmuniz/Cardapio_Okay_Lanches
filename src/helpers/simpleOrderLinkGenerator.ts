import { ObjetoPedido } from '../types/types';

function simpleOrderLinkGenerator(pedido: ObjetoPedido) {
  const numeroTelefone = '5519997462506';

  const pedidoText = pedido.pedidos.map((item) => {
    return `Nome: *${item.name}*\n
    Quantidade: ${item.quantidade}\n
    Preço da unidade: ${item.price.toFixed(2)}\n
    --------------------------------\n`;
  }).join('\n');

  const mensagemCodificada = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
  ${pedidoText}\nObservações: ${pedido.observacoes}`);

  const numeroTelefoneCodificado = encodeURIComponent(numeroTelefone);

  window.location.href = `whatsapp://send?phone=${numeroTelefoneCodificado}&text=${mensagemCodificada}`;
}

export default simpleOrderLinkGenerator;
