//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
/*const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector("body")

const template = ()=>
`<ul></ul>
`
body.innerHTML += template();

const paises = document.querySelector("ul");

for (const item of countries) {
	const li = document.createElement("li");
	li.innerHTML =`${item}`
	paises.append(li);
	}
*/

//1.2Elimina el elemento que tenga la clase .fn-remove-me.
/*const RemoveMe = document.querySelector(".fn-remove-me")

RemoveMe.remove()*/

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
/*const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');

const template2 = () =>`
<ul id='lista'></ul>
`
div.innerHTML += template2()

const coches = document.querySelector('#lista')

for (const item of cars) {
    const li = document.createElement("li");
    li.innerHTML = `${item}`;
    coches.append(li);
};*/

//!1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//!h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

//!1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//!elemento de la serie de divs.

//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//!divs que elimine ese mismo elemento del html.

