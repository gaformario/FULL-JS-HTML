function inserir() {
    let tabela = document.getElementById("tabela")
    let ra = document.getElementById("ra").value
    let nome = document.getElementById("nome").value
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let trab = parseFloat(document.getElementById("trab").value)

    let media = nota1 * 0.3  + nota2 * 0.5 + trab * 0.2

    let situacao = ""
    if(media >= 7.0) {
        situacao = "Aprovado"
    }   
    else {
        situacao = "Reprovado"

    }
// ordem celulas da tabela
    let linha = tabela.insertRow(-1)
    let cra = linha.insertCell(0)
    let cnome = linha.insertCell(1)
    let cnota1 = linha.insertCell(2)
    let cnota2 = linha.insertCell(3)
    let ctrab = linha.insertCell(4)
    let cmedia = linha.insertCell(5)
    let csitu = linha.insertCell(6)


    cra.innerHTML = ra
    cnome.innerHTML = nome
    cnota1.innerHTML = nota1.toFixed(2)
    cnota2.innerHTML = nota2.toFixed(2)
    ctrab.innerHTML = trab.toFixed(2)
    cmedia.innerHTML = media.toFixed(2)
    csitu.innerHTML = situacao

}