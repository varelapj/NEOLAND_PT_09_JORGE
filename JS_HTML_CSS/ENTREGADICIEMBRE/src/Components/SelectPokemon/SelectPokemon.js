


// //! No lo entiendo, no me sale

// import { PrintGallery } from "../../Pages/PokeApi/Pokeapi";
// import { filterDataPokemonSelect } from "../../Utils/TipoPokemon";
  // // Inyectamos en HTML a través de createelement el select con sus opciones dinámicas
  // // recorridas en un bucle de lso tipos
  // export const PrintSelect = (Tipos) => {
  //   const SelectTipos = document.createElement("select");
  //  const Opciones = document.createElement("options");
 //    Opciones.textContent = "Todos los tipos";
 //   SelectTipos.appendChild(Opciones);
 //   
  //   Tipos.map((type) =>{
  //     const Opciones = document.createElement("option");
  //     Opciones.textContent = type;
  //     SelectTipos.appendChild(Opciones)
  //   });
  // //Como no es un template en sí, solo se puede usar el append
  //   document.querySelector('#Filtros').appendChild(SelectTipos);
  //  listener(allData);

  // }


  
//! CODIGO PEDRO
import "./SelectPokemon.css";
import { filterDataPokemonSelect } from "../../Utils/FilterDataPokemon";
import { PrintGallery } from "../../Pages/PokeApi/Pokeapi";
  
const listener = (allData) => {
//Apunto al select que he creado
  const select = document.querySelector("select");

  // LE doy un evento change y le pido que me filtre toda la data con lo que selecciono
  // e.target.value
  select.addEventListener("change", (e) => {
    const filterInfoPokemon = filterDataPokemonSelect(allData, e.target.value);
// y que imprima las tarjetas ya con la data filtrada
    PrintGallery(filterInfoPokemon);
  });
};


export const PrintSelectTypePokemon = (types, allData) => {
  // creo un select con N opciones y un mensaje general
  const selectType = document.createElement("select");
  const optionType = document.createElement("option");
  optionType.textContent = "¿De qué tipo?";
  selectType.appendChild(optionType);
// Recorro y voy creando N opciones por cada tipo de pokemon ya sin repetidos
  types.map((type) => {
    const optionType = document.createElement("option");
    optionType.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    selectType.appendChild(optionType);
  });
// añado el select al div de filtros de la página
  document.getElementById("Filtros").appendChild(selectType);
// y llamo al listener
  listener(allData);
};