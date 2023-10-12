let nome = window.prompt("Qual o seu nome de usuário?").toUpperCase()
let idade = window.prompt(`Senhor ${nome} qual a sua idade?`)
let bairro = window.prompt("Qual bairro vc mora?")
let num1 = Number(window.prompt(`Me diga o primeiro numero inteiro para soma-lo`))
let num2 = Number(window.prompt(`Me diga o segundo numero inteiro para soma-lo`))
let soma = num1 + num2
window.alert(`A soma de ${num1} + ${num2} = ${soma}`)