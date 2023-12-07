import "./ImgPokemon.css"



const template = () => `
<img id="pokemon" src="https://www.trendycovers.com/covers/Pokemon_facebook_cover_1345032559.jpg"></img>`;

export const PrintImgPokemon =()=>{
    document.querySelector("header").innerHTML += template();
}

