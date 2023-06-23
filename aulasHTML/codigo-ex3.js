function calcular() {
    let duracao = document.getElementById("duracao").value
    let hora = Math.floor(duracao / 60) //arredondamento pra baixo 'floor'
    let minuto = duracao % 60 //resto da divisao de duracao por 60

    document.getElementById("tempo").innerHTML = (hora +":"+minuto).style.fontSize="48px"
}