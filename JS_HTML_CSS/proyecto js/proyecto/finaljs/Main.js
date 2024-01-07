import { initTemplate } from './src/utils/initTemplate';
//import { getInfo } from './src/utils';
import { initControler } from './src/utils/rutas';
import './style.css';

initTemplate();


initControler();

/*const listaPokemon=document.querySelector("#listaPokemon");

const botonesHeader=document.querySelectorAll("button-header")
 let url="https://pokeapi.co/api/v2/pokemon/";

 for (let i= 1; i <= 151; i++) {
    fetch(URL+i)
      .then((response) =>response.json())
      .then(Data => mostrarPokemon(Data))
 }

 const mostrarPokemon=(poke)=>{

    let tipos=poke.types.map((type) =>`<p class="${type.type.name} tipo"> ${type.type.name}</p>`);
    tipos=tipos.join('');

    let pokeId=poke.id.tostring();
    if(pokeId.length===1){
        pokeId="00"+pokeId;
    }else if (pokeId.length===2){
        pokeId="0"+pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML =`
    <p class="pokemon-id-back">#${pokeId}</p>
      <div class="pokemon-imagen">
        <img src="${poke.sprites.other["offical-atwork"].front_default}" alt="${poke.name}">
      </div>
      <div class="pokemon-info">
        <div class="nombre-contenedor">
          <p class="pokemon-id">#${pokeId}</p>
          <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
        <div class="pokemon-stats">
          <p class="stat"> ${poke.height}m</p>
          <p class="stat"> ${poke.weight} kg</p>
        </div>
      </div>`;
      listaPokemon.append(div);
 }

botonesHeader.forEach(boton=>boton.addEventListener("click",(event)=>{
    const botonId=event.currentTarget.id;

    listaPokemon.innerHTML="";
    
 for (let i= 1; i <= 151; i++) {
    fetch(URL+i)
      .then((response) =>response.json())
      .then(Data => {
        if(botonId==="ver-todos") {
            mostrarPokemon(Data);
        } else{

        const tipos=Data.types.map(type=>type.type.name);
        if (tipos.some(tipo=>tipo.includes(botonId))){
            mostrarPokemon(Data);
        }
      }

    }

}))

html pincipal 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="" />
    <meta name="pokedex" content="width=device-width, initial-scale=1.0" />
    <title>proyecto nelson</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <nav class="nav">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" lt="poke">
      <ul class="lista-nav">
        <li class="nav-item"><button class="button-header header" id="ver todos"> Ver todos </button></li>
        <li class="nav-item"><button class="button-header normal" id="normal"> Normal </button></li>
        <li class="nav-item"><button class="button-header fire" id="fire"> Fire </button></li>
        <li class="nav-item"><button class="button-header water" id="water"> Water </button></li>
        <li class="nav-item"><button class="button-header grass" id="grass"> Grass </button> </li>
        <li class="nav-item"><button class="button-header electric" id="electric"> Electric </button></li>
        <li class="nav-item"><button class="button-header ice" id="ice"> Ice </button></li>
        <li class="nav-item"><button class="button-header fighting" id="fighting"> Fighting </button></li>
        <li class="nav-item"><button class="button-header poison" id="poison"> Poison </button></li>
        <li class="nav-item"><button class="button-header ground" id="ground"> Ground </button></li>
        <li class="nav-item"><button class="button-header flying" id="flying"> Flying </button></li>
        <li class="nav-item"><button class="button-header psychic" id="psychic">Psychic </button></li>
        <li class="nav-item"><button class="button-header bug" id="bug"> Bug </button></li>
        <li class="nav-item"><button class="button-header rock" id="rock"> Rock </button></li>
        <li class="nav-item"><button class="button-header ghost" id="ghost"> Ghost </button></li>
        <li class="nav-item"><button class="button-header dark" id="dark"> Dark </button></li>
        <li class="nav-item"><button class="button-header dragon" id="dragon"> Dragon </button></li>
        <li class="nav-item"><button class="button-header steel" id="steel"> Steel </button></li>
        <li class="nav-item"><button class="button-header fairy" id="fairy"> Fairy </button></li>
      </ul>
      </nav>
    </header>
    <main> 

      <div id="todos"> 
        <div class="pokemon-todos" id="listaPokemon">
          
          </div><div class="pokemon">
            <p class="pokemon-id-back">#025</p>
              <div class="pokemon-imagen">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              lt="Pikachu">
              </div>
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>
                </div>
                <div class="pokemon-tipos">
                  <p class="tipo"> Electric</p>
                  <p class="tipo"> Fighting</p>
                </div>
                <div class="pokemon-stats">
                  <p class="stat"> 3 m</p>
                  <p class="stat"> 5 kg</p>
                </div>
              </div>
          <div class="pokemon">
            <p class="pokemon-id-back">#025</p>
              <div class="pokemon-imagen">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              lt="Pikachu">
              </div>
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>

                </div>
                <div class="pokemon-tipos">
                  <p class="tipo"> Electric</p>
                  <p class="tipo"> Fighting</p>
                </div>
                <div class="pokemon-stats">
                  <p class="stat"> 3 m</p>
                  <p class="stat"> 5 kg</p>
                </div>
              </div>
          </div>
          <div class="pokemon">
            <p class="pokemon-id-back">#025</p>
              <div class="pokemon-imagen">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              lt="Pikachu">
              </div>
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>
              
                </div>
                <div class="pokemon-tipos">
                  <p class="tipo"> Electric</p>
                  <p class="tipo"> Fighting</p>
                </div>
                <div class="pokemon-stats">
                  <p class="stat"> 3 m</p>
                  <p class="stat"> 5 kg</p>
                </div>
              </div>
          </div>
          <div class="pokemon">
            <p class="pokemon-id-back">#025</p>
              <div class="pokemon-imagen">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              lt="Pikachu">
              </div>
              <div class="pokemon-info">
                <div class="nombre-contenedor">
                  <p class="pokemon-id">#025</p>
                  <h2 class="pokemon-nombre">Pikachu</h2>
              
                </div>
                <div class="pokemon-tipos">
                  <p class="tipo"> Electric</p>
                  <p class="tipo"> Fighting</p>
                </div>
                <div class="pokemon-stats">
                  <p class="stat"> 3 m</p>
                  <p class="stat"> 5 kg</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
    <div id="app"></div>
    <script type="module" src="/main.js"></script></div>
  </body>
</html>




*/