/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombres = users.map(user => console.log(user.name));



/*4.2 Dado el anterior array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/


const nombres2 = users.map(user => {
user.name[0]=='A'?
    console.log('Anacleto'):
console.log(user.name)})

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const ciudades = cities.map(city => {

    return (city.isVisited===true)?
    (`${city.name} (Visitado)`):
    (city.name)
})

console.log(ciudades)

/*template string const ciudades = cities.map(city => `${city.name} (Visitado)`)*/
