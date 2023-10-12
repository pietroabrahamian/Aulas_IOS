
let mediaAluno = 9
const mediaAp = 7

// Aluno que tem a média >= que 7 Ap.
// Aluno que tem a média = a 10 PS5
let testeLogico = mediaAluno >= mediaAp; 
let premio = mediaAluno == 10

// console.log(`O aluno foi aprovado? ${testeLogico}`);
// console.log(`O aluno vai ganhar premio? ${premio}`);


// if simples 
// if (mediaAluno == 10) {
//     console.log(`O aluno ganhou o premio`);
// }


// if composto
// if (mediaAluno >= 7) {
//     console.log(`Aluno aprovado!`);
// } else {
//     console.log(`Aluno reprovado!`);
// }


// if aninhado
// if (mediaAluno >= 9) {
//         console.log(`Aprovado!`);
// } else if (mediaAluno >= 7) {
//         console.log(`Aprovado pelo conselho!`);
// } else {
//         console.log(`Reprovado!`);
//  }


// console.log(mediaAluno >= 7 ? "Aprovado" : "Reprovado");

// & = e / || = ou
// let temSol = true
// let dinheiro = 1200

// if (temSol == true & dinheiro >= 1000) {
//     console.log(`Vou viajar!`);
// } else {
//     console.log(`Não vou viajar!`);
// }
let nota = 1

switch (nota) {
    case 1:
        console.log("Péssimo");
        break;
    case 2:
        console.log("Ruim");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bom");
        break;
    case 5:
        console.log("Ótimo");
        break;
    default:
        console.log("Não avaliado");
        break;
}


console.log("Fim do programa!");