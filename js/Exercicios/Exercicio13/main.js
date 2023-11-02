let botao = document.querySelector("#botao")
botao.addEventListener(`click`, calculoIMC )

function calculoIMC () {
    let cm = Number(document.querySelector("#altura").value)
    let kg = Number(document.querySelector("#peso").value)
    let calculo =  peso / (altura * altura)
    let texto = document.querySelector("#txt")

    if (calculo < 16.9) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está muito abaixo do peso. `

    }else if (17 < calculo < 18,4) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está abaixo do peso.`

    }else if (18 < calculo < 24,9) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está no peso normal.`

    }else if (25 < calculo < 29,9) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está acima do peso.`

    }else if (30 < calculo < 34,9) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está com Obesidade grau 1.`

    }else if (35 < calculo < 40) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está com Obesidade grau 2.`

    }else if (calculo > 40) {
        texto.innerHTML = `Seu IMC é ${calculo}. Você está com Obesidade grau 3.`
    } else {
        window.alert("Insira valores válidos")
    }
}