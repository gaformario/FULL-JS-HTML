function calcular () {
    let dtvcto = document.getElementById("dt_vencimento").value
    let vlconta = Number(document.getElementById("valor_conta").value)

    let hoje = new Date()
    let vencimento = new Date()

    let aux = dtvcto.split("-")
    vencimento.setDate(Number(aux[2]))
    vencimento.setMonth(Number(aux[1] - 1))
    vencimento.setFullYear(Number(aux[0]))
    
    alert(vencimento)
    alert((hoje - vencimento) / 86400000)


    let juros = 0
    let multa = 0
    let total = 0
    let dif_dias = (hoje - vencimento) / 86400000

    if(dif_dias > 0) {
        multa = vlconta * 0.02
        juros = vlconta * 0.0033 * dif_dias
    }

    total = vlconta + multa + juros
    
    document.getElementById("valor_multa").value = multa.toFixed(2)
    document.getElementById("valor_juros").value = juros.toFixed(2)
    document.getElementById("valor_total").value = total.toFixed(2)




}