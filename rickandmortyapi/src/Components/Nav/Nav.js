import { PrintPokeApiPage } from "../../Pages/PokeApi/Pokeapi";
import { PrintRickandmortyPage } from "../../Pages/Rickandmorty/Rickandmorty";
import "./Nav.css";

const template = () => `
<nav>
    <button id="NavegaPokeApi" class="btn-nav">PokeApi</button>
    <button id="NavegaRickandMorty" class="btn-nav">Rick & Morty</button>
</nav>`;

export const Listeners = () =>{

    const PokeApi = document.querySelector("#NavegaPokeApi");
    PokeApi.addEventListener("click", () =>{
        PrintPokeApiPage();
    });
    const Rickandmorty = document.querySelector("#NavegaRickandMorty");
    Rickandmorty.addEventListener("click",()=>{
        PrintRickandmortyPage()
    })
}




export const PrintNav =()=>{
    document.querySelector("header").innerHTML += template();
}

