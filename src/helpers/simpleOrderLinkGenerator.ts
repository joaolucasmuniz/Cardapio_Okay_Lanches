function simpleOrderLinkGenerator(pedido:any) {
  const numeroTelefone = '5519997462506';

  const mensagemCodificada = encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n
    Nome: *${pedido.name}*\n
    Preço da unidade: ${pedido.price.toFixed(2)}\n
    Quantidade: ${pedido.quantidade}\n`,
  );
  const numeroTelefoneCodificado = encodeURIComponent(numeroTelefone);

  window.location.href = `whatsapp://send?phone=${numeroTelefoneCodificado}&text=${mensagemCodificada}`;
}

export default simpleOrderLinkGenerator;
