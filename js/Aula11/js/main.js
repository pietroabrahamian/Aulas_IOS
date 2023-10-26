// JavaScript e DOM
// objeto document
console.log(document);


// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body); 


// Alterar o título
document.title = 123;
// Criar um elemento <h1>
let heading = document.createElement('H1'); // guardou o elemento na variável
heading.innerHTML = 'Olá alunos!'; // o "innerHTML" altera o conteúdo do elemento
document.body.appendChild(heading); // o "appendChild" fala que a tag heading é filho do body assim podendo aparecer na pagina
heading.style.borderBottom = 'solid 3px #000';