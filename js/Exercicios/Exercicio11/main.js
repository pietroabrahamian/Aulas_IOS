window.alert("Seja muito bem-vindo a minha página de Manipulação de DOM - pt1")
console.log(document.title);
// SECTION E ARTICLE
let section1 = document.createElement('section')
let article1 = document.createElement('article')
document.body.appendChild(section1)
document.body.appendChild(article1)
// STYLE NO JS
section1.style.border = '5px solid blue'
article1.style.border = '5px solid red'
document.body.style.display = 'flex';
document.body.style.gap = '10%';
document.body.style.padding = '50px';
// H1 E P
let h1S = document.createElement('h1')
let h1A = document.createElement('h1')
let pS = document.createElement('p')
let pA = document.createElement('p')
h1S.innerHTML = 'Pietro Abrahamian'
pS.innerHTML = 'Esse é o meu documento testando o DOM'
h1A.innerHTML = 'Participantes d grupo'
pA.innerHTML = 'Bejamim, Gabriel Dias, Pietro, Kaiky e Luigi'
section1.appendChild(h1S)
section1.appendChild(pS)
article1.appendChild(h1A)
article1.appendChild(pA)
console.log(document.body);
