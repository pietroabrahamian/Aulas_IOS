alert("Vamos calcular o seu IMC (Índice de Massa Corporal)")
let altura = Number(window.prompt("Digite a sua altura em metros"))
let peso = Number(window.prompt("Agora digite o seu peso em quilograma (Kg)"))
let calcImc = peso/altura * 2
let imc = (alert(`O seu IMC é: ${calcImc}`))
if (calcImc>24.9) {
    alert("Seu IMC não está saudável.")
} else if (calcImc<18.5){
    alert("Seu IMC não está saudável.")
} else {
    alert("Seu IMC está saudável.")
}