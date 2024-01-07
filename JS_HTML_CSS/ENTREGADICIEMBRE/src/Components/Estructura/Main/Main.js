import "./main.css"

// Pinto un main general con una imagen, en lugar de añadirle un dashboard
const template = () => `<main>
<img id="ImagenAhorcado" src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png"></img>
</main>`;
export const PrintMain = () =>{
document.querySelector("#app").innerHTML += template();
}
 

