import "./main.css"

const template = () => `<main>Cuerpo</main>`;
export const PrintMain = () =>{
document.querySelector("#app").innerHTML += template();

}
