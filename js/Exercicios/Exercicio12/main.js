let div1 = document.getElementById("item1")

function move (){
    div1.style.backgroundColor = "green"
}
function clique () {
    let clicar2 = document.createElement('h1')
    clicar2.innerHTML = `Pietro Abrahamian`
    div1.appendChild(clicar2)     
}   
function tirar () {
    div1.style.backgroundColor = "gray"
}


console.log(document.body);
