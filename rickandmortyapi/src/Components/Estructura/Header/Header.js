
import { PrintImgPokemon } from "../../ImgPokemon/ImgPokemon";
import { PrintNav } from "../../Nav/Nav";
import "./Header.css"

const template = () => `<header>
<h1 id="titulo">Ejercicios Jorge</h1>
</header>`;

export const PrintHeader = () =>{
document.querySelector("#app").innerHTML += template();
PrintNav();
PrintImgPokemon();
}



