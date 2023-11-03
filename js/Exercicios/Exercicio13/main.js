let botao = document.querySelector("#botao")
botao.addEventListener(`click`, calculoIMC )


function calculoIMC () {
    let cm = Number(document.querySelector("#altura").value)
    let kg = Number(document.querySelector("#peso").value)
    let calculo =  (kg / (cm * cm)).toFixed(2)
    let texto = document.querySelector("#txt")
    let nome = document.querySelector("#name").value

    if (calculo < 16.9) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está muito abaixo do peso.`

    }else if ( calculo < 18.4) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está abaixo do peso.`

    }else if (calculo < 24.9) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está no peso normal.`

    }else if (calculo < 29.9) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está acima do peso.`

    }else if (calculo < 34.9) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está com Obesidade grau 1.`

    }else if (calculo < 40) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está com Obesidade grau 2.`

    }else if (calculo > 40) {
        texto.innerHTML = `${nome} seu IMC é ${calculo}. Você está com Obesidade grau 3.`
    } else {
        window.alert("Insira valores válidos")
    }
    
}
