// pop() - remover um elemento do último posição do seu array

// push() - vai inserir um elemento na última posição do seu array

let mercado = ["lichia", "Banana", "Kiwi", "Carambola", "Graviola"]

let fruta1 = mercado.pop()
console.log(fruta1);
console.log(mercado.length);
console.log(mercado);
mercado.push("Uva")
console.log(mercado.length);


// shift - vai remover um elemento no começo do array
// unshift - vai inserir um elemento no começo do array

let mercado1 = ["lichia", "Banana", "Kiwi", "Carambola", "Graviola"]

mercado.shift()
console.log(mercado1);
mercado.unshift("Morango")
console.log(mercado1);


// delete - remove o dado mas deixa o espaço
delete mercado[2] 
console.log(mercado);   