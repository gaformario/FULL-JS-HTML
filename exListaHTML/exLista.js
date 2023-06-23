function classificarTriangulo() {
    // Obter os valores dos lados
    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);

    // Verificar se os valores formam um triângulo
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      // Classificar o triângulo
      if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById("resultado").innerHTML = "Triângulo equilátero.";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById("resultado").innerHTML = "Triângulo isósceles.";
      } else {
        document.getElementById("resultado").innerHTML = "Triângulo escaleno.";
      }
    } else {
      document.getElementById("resultado").innerHTML = "Os valores informados não formam um triângulo.";
    }
  }