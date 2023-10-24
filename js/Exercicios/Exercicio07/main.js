let alunos = [{
    nome: "Pietro",
    sobrenome: "Abrahamian",
    notas: [10, 4, 9, 5],
    diciplina:"Matematica",
    endereco: {
        rua: "Das Peras",
        bairro: "Tucuruvi",
        num: "78"
    },
    nacionalidade: "Espanhol",
    nomePais: ["Jeferson", "Leila"],
    faltas: 2,
},
{
    nome: "Kaiky",
    sobrenome: "Oliveira",
    notas: [5, 7, 9, 10],
    diciplina:"Matematica",
    endereco: {
        rua: "Das Maças",
        bairro: "Cachoeirinha",
        num: "70"
    },
    nacionalidade: "Espanhol",
    nomePais: ["Jose", "Ana"],
    faltas: 2,
},
{
    nome: "Benjamim",
    sobrenome: "Dias",
    notas: [10, 9, 8, 10],
    diciplina:"Matematica",
    endereco: {
        rua: "Das Morango",
        bairro: "Cachoeirinha",
        num: "19"
    },
    nacionalidade: "Espanhol",
    nomePais: ["Carlos", "Josefa"],
    faltas: 0,
}
];

for (let i of alunos ){
    let media = 0;
  
    for (let n of i.notas) {
      media += n;
    }
  
    let mediaSoma = media / 4;
  
    if (mediaSoma >= 7) {
      console.log(
        `Aluno com o nome ${i.nome}, que mora em ${i.endereco.rua}, tem a média de ${mediaSoma}, portando foi aprovado`
      );
    } else {
      console.log(
        `Aluno com o nome ${i.nome}, que mora em ${i.endereco.rua}, tem a média de ${mediaSoma}, portando foi reprovado`
      );
    }
  }