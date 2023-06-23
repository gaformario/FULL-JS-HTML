let alturas = [];

function adicionarAltura() {
    let altura = document.getElementById("altura").value;
    if (altura !== "") {
        document.getElementById("altura").value = "";
        alturas.push(Number(altura));
        document.getElementById("alturas").innerHTML += altura + " ";  
        
        calcularDesvioPadrao();
    }
}

function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < alturas.length; i++) {
        soma += alturas[i];
    }
    return soma / alturas.length;
}

function calcularVariancia() {
    let media = calcularMedia();
    let soma = 0;
    for (let i = 0; i < alturas.length; i++) {
        soma += Math.pow(alturas[i] - media, 2);
    }
    return soma / (alturas.length - 1);
}

function calcularDesvioPadrao() {
    let variancia = calcularVariancia();
    let desvio = Math.sqrt(variancia);
    document.getElementById("variancia").innerHTML = "Variancia: " + variancia.toFixed(2);
    document.getElementById("desvio").innerHTML = "Desvio Padrao: " + desvio.toFixed(2);
}