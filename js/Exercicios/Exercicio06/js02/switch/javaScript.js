let produto = Number(window.prompt("Insira o valor do seu produto"))
window.alert("Escolha um dos códigos promocionais asseguir para ser inserido ao seu produto:");
window.alert("DESC1 - 05 de desconto; DESC2 - 10% de desconto; DESC3 - 15% de desconto; DESC4 - 20% de desconto; DESC5 - 25% de desconto");
let promocao = window.prompt().toUpperCase()
let desc1 = produto - produto * 0.05  
let desc2 = produto - produto * 0.10
let desc3 = produto - produto * 0.15
let desc4 = produto - produto * 0.20
let desc5 = produto - produto * 0.25

switch (promocao) {
    case "DESC1":
        window.alert(`O valor do seu produto é ${produto} e o valor com desconto é ${desc1}`)
        break;
    case "DESC2":
        window.alert(`O valor do seu produto é ${produto} e o valor com desconto é ${desc2}`)
        break;
    case "DESC3":
        window.alert(`O valor do seu produto é ${produto} e o valor com desconto é ${desc3}`)
        break;
    case "DESC4":
        window.alert(`O valor do seu produto é ${produto} e o valor com desconto é ${desc4}`)
        break;
    case "DESC5":
        window.alert(`O valor do seu produto é ${produto} e o valor com desconto é ${desc5}`)
        break;
    default:
        window.alert("Erro!")
        break;
}