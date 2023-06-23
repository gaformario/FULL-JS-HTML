let listaProduto = []
let listaPreco = []
let listaEstoque = []
let aux= ""

function calcular() {
  let produto = document.getElementById("produto").value
  let preco = document.getElementsById("preco").value
  let estoque = document.getElementById("estoque").value
  let lucro,total = 0


  listaProduto.push(produto)
  listaEstoque.push(estoque)
  lucro = calcularLucro(preco)
  listaPreco.push(lucro)

  total += estoque * lucro
  aux += produto + "--> R$ " + lucro.toFixed(2) + "<br>"

  document.getElementsById("listaProduto").innerHTML = aux
  document.getElementsById("total").innerHTML = total.toFixed(2)

}

function calcularLucro(preco) {
  if (preco <= 40.0) {
    return preco * 1.15;
  } 
  else if (preco <= 80) {
    return preco * 1.30;
  } 
  else {
    return preco * 1.50;
  }
}
