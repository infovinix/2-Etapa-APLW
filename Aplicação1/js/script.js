// Função para adicionar filme ao carrinho
function adicionarFilme(nome, preco) {
  const carrinho = document.getElementById('carrinho');
  const totalSpan = document.getElementById('total');
  
  // Cria um novo item de filme no carrinho
  const item = document.createElement('li');
  item.textContent = nome + ' - R$' + preco;
  carrinho.appendChild(item);
  
  // Atualiza o total da compra
  let total = parseFloat(totalSpan.textContent);
  total += preco;
  totalSpan.textContent = total.toFixed(2);
}
  
  // Atualiza o total da compra
  let total = parseFloat(totalSpan.textContent);
  total -= preco;
  totalSpan.textContent = total.toFixed(2);

// Função para finalizar a compra
function finalizarCompra() {
  const carrinho = document.getElementById('carrinho');
  const totalSpan = document.getElementById('total');
  
  // Limpa o carrinho e reseta o total
  carrinho.innerHTML = '';
  totalSpan.textContent = '0.00';
  
  alert('Compra finalizada! Obrigado por alugar conosco.');
}
