//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const ShowMe = document.querySelector(".showme")
console.log(ShowMe)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const Pillado = document.querySelector("#pillado")
console.log(Pillado)

//1.3 Usa querySelector para mostrar por consola todos los p

const P = document.querySelectorAll("p")
console.log(P)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const Pokemon = document.querySelectorAll(".pokemon")
console.log(Pokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const TestMe = document.querySelectorAll("[data-function='testMe']")
console.log(TestMe)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const TestMe3 = document.querySelectorAll("[data-function='testMe']")
console.log(TestMe3[2])

