// export const  TipoPokemon = (PokemonTodos) => {
// const NombreRepetirEliminar = []
// PokemonTodos.forEach((elementos, indice) => {
//     elementos.type.forEach((Tipo)=>{
//         !NombreRepetirEliminar.includes(Tipo.type.name)
//         && NombreRepetirEliminar.push(Tipo.type.name);
//     })
// });
// return NombreRepetirEliminar
// }

//! No lo entiendo, no me sale
// export const TipoPokemon = (totalPokemon) => {
//     const nameTypeNoReapet = [];
  
//     totalPokemon.forEach((item, index) => {
//       item.type.forEach((typeSingle) => {
//         !nameTypeNoReapet.includes(typeSingle.type.name) &&
//           nameTypeNoReapet.push(typeSingle.type.name);
//       });
//     });
  
//     return nameTypeNoReapet;
//   };
  

// export const filterDataPokemonSelect = (data, typeOnchangeSelect) => {

//     const filterPokemon = data.filter((pokemon) =>
//       pokemon.type[0].type.name
//         .toLowerCase()
//         .includes(typeOnchangeSelect.toLowerCase())
//     );
  
//     const filterPokemonPositionOne = data.filter((pokemon) =>
//       pokemon.type[1]?.type.name
//         .toLowerCase()
//         .includes(typeOnchangeSelect.toLowerCase())
//     );
  
//     if (typeOnchangeSelect == "All pokemon") {
//       return data;
//     } else if (filterPokemon.length == 0) {
//       return filterPokemonPositionOne;
//     } else {
//       return filterPokemon;
//     }
//   };
  

//! CÓDIGO DE PEDRO
export const TipoPokemon = (TotalPokemon) =>{
// Creo un array vacío
  const TiposUnicos = []
  // Recorro todos los datos
  TotalPokemon.forEach((elementos) => {
//Hago otro bucle porque dentro del array hay dos objetos

    elementos.type.forEach((tipounico1)=>{
// Si el tipo no está incluido en el array, lo metemos
      !TiposUnicos.includes(tipounico1.type.name) && TiposUnicos.push(tipounico1.type.name);
    })
  });
// Devuelvo el array con los datos
  return TiposUnicos;


}