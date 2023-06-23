let produtos = [];

produtos.push({ nome: "Arroz", quantidade: 10, valorCompra: 20.0 });
produtos.push({ nome: "Feijão", quantidade: 5, valorCompra: 30.0 });
produtos.push({ nome: "Óleo", quantidade: 3, valorCompra: 15.0 });

let lucroTotal = 0.0;


for (let i = 0; i < produtos.length; i++) {
  let produto = produtos[i];
  let lucro;

  if (produto.valorCompra <= 40.0) {
    lucro = produto.valorCompra * 0.15;
  } else if (produto.valorCompra <= 80.0) {
    lucro = produto.valorCompra * 0.3;
  } else {
    lucro = produto.valorCompra * 0.5;
  }

  let lucroProduto = lucro * produto.quantidade;
  lucroTotal += lucroProduto;

  console.log(`Produto: ${produto.nome}`);
  console.log(`Quantidade: ${produto.quantidade}`);
  console.log(`Valor de compra: R$ ${produto.valorCompra.toFixed(2)}`);
  console.log(`Lucro por unidade: R$ ${lucro.toFixed(2)}`);
  console.log(`Lucro total: R$ ${lucroProduto.toFixed(2)}`);
  console.log("");
}

console.log(`Lucro total com a venda de todos os produtos: R$ ${lucroTotal.toFixed(2)}`);
