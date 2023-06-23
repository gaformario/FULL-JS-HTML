function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    document.getElementById("imc").value = imc.toFixed(2);
    
    if (imc < 18.5) {
      document.getElementById("situacao").value = "Magreza";
    } else if (imc >= 18.5 && imc < 25) {
      document.getElementById("situacao").value = "Normal";
    } else if (imc >= 25 && imc < 30) {
      document.getElementById("situacao").value = "Sobrepeso";
    } else {
      document.getElementById("situacao").value = "Obesidade";
    }
  }