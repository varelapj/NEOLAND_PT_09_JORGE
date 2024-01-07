
  // Le pido que me filtre el nombre de los pokemon pasándolos 
  // a minúscula y me devuelva los datos que luego se usará antes del printGallery
export const FilterDataPokemon = (data, textoInputBusqueda) => {
  const dataFiltrada = data.filter((item) =>
    item.name.toLowerCase().includes(textoInputBusqueda.toLowerCase())
  );
  return dataFiltrada;
};


//! CÓDIGO DE PEDRO

export const filterDataPokemonSelect = (data, typeOnchangeSelect) => {
// ME filtra los datos según el valor seleccionado en el select
// en la primera posición del objeto, porque el objeto de tipos son dos tipos

  const filterPokemon = data.filter((pokemon) =>
    pokemon.type[0].type.name
      .toLowerCase()
      .includes(typeOnchangeSelect.toLowerCase())
  );
// ME filtra los datos según el valor seleccionado en el select
// en la segunda posición del objeto, si tiene segunda ?
  const filterPokemonPositionOne = data.filter((pokemon) =>
    pokemon.type[1]?.type.name
      .toLowerCase()
      .includes(typeOnchangeSelect.toLowerCase())
  );
// Si el select marca la opción general, me muestra todo
  if (typeOnchangeSelect == "¿De qué tipo?") {
    return data;
// si el valor seleccionado, no coincide con la primera posición del objeto [0] 
// su lenght es 0, es decir, no tiene tipo coincidente, me filtra pro el segundo tipo

  } else if (filterPokemon.length == 0) {
    return filterPokemonPositionOne;
// si el valor de la primera posición no es 0, es decir, si tiene tipo, me filtra por el primer tipo
  } else {
    return filterPokemon;
  }
};