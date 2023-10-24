let nt1 = Number(window.prompt(`Qual a sua primeira nota?`))
let nt2 = Number(window.prompt(`Qual a sua segunda nota?`))
let faltas = Number(window.prompt(`Quantas vezes você faltou?`))

let mediaAuluno = (nota1=0, nota2=0) => {
    return (nota1 + nota2) /2
}
if (mediaAuluno(nt1, nt2) >= 6 && faltas < 5) {
    window.alert(`Você foi aprovado!`)
} else {
    window.alert(`Você foi reprovado!`)
}
