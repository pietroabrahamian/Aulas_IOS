let nt1 = 8
let nt2 = 5
let media = (nt1 + nt2)/2
console.log(`A média do alunoe é: ${media.toFixed(2)}`);

// Function

function mediaAluno (nota1 = 0, nota2 = 0)  {
    return (nota1 + nota2) /2
}
 
let mAluno = (nt1, nt2) => {
    return (nt1 + nt2)/2
}

console.log(`A sua média é ${mediaAluno(5)}`);
console.log(`A sua média é ${mAluno(5, 10)}`);

