function calcular() {
    let valor = document.getElementById("valor").value //value pra pegar o valor da id
    let entrada = valor * 0.5
    let saldo = (valor * 0.5) / 12


    document.getElementById("entrada").innerHTML = "Entrada de R$ " + entrada.toFixed(2)
    document.getElementById("saldo").innerHTML = "Saldo em 12x de R$" + saldo.toFixed(2)

}