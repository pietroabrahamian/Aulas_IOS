// let titulo = document.getElementById("teste")
// titulo.style.color = "red"

let titulo = document.querySelector("#titulo")
titulo.style.color = "blue"
// let par = document.querySelectorAll("p")
// par[0].style.color = "green"



// titulo.style.fontFamily = "Arial"
// document.body.style.display = "flex"
// document.body.style.justifyContent = "center"
// document.body.style.alignItems = "center"
// document.body.style.flexDirection = "column"

let par = document.querySelectorAll("p")

for (let cont = 0; cont < par.length;cont++) {
    par[cont].style.color = "red"
}