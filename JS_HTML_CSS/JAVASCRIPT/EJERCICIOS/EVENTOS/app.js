//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
/*const template = `<button type="button" id="btnToClick">Evento</button>`;

const body = document.querySelector("body");

body.innerHTML += template;


let handleClick = (event) => {
    console.log(event);
 }
 const button = document.querySelector("#btnToClick")

button.addEventListener("click", (e) => handleClick(e));*/


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor //!del input.
const focus = document.querySelector('.focus')

let handleClick = (event) => {
    console.log(event.target.value);
 }
focus.addEventListener("focus", (e) => handleClick(e));

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

/*const value = document.querySelector('.value')

let handleClick = (event) => {
    console.log(event.data);
 }
value.addEventListener("input", (e) => handleClick(e))*/


