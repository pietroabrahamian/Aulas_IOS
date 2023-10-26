// CLASSE
class alunoIOS {
    constructor(ra, nome, idade) {
        this.ra = ra 
        this.nome = nome
        this.idade = idade 
    }
}
let aluno1 = new alunoIOS(123, "Dabiel", 25)
let aluno2 = new alunoIOS(456, "Ermeson", 250)
console.log(aluno1);
console.log(aluno2);

// EXERCICIO DE SALA
class carro {
    constructor (marca, modelo, valor, ano, cor){
    this.marca = marca
    this.modelo = modelo
    this.valor = valor
    this.ano = ano
    this.cor = cor
    }
}
let carro1 = new carro("Ferrari", "Porche", 465000, 2017, "prata" )
let carro2 = new carro("Chevrolet", "Celta", 15900, 2007, "preto" )
let carro3 = new carro("Fiat", "Fastback", 121990, 2024, "vermelho" )
console.log(carro1);
console.log(carro2);
console.log(carro3);