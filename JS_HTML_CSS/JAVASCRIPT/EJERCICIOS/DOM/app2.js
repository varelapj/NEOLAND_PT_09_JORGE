//2.1 Inserta dinamicamente en un html un div vacio con javascript.
/*const template = () => `<div></div>`
const body = document.querySelector("body");
body.innerHTML += template()*/


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
/*const template = () => `<div><p></p></div>`
const body = document.querySelector("body");
body.innerHTML += template()*/


//!2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
/*const template = () => `<div><p></p></div>`
const body = document.querySelector("body");
body.innerHTML += template()*/


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
/*const template = () => `<div><p>Soy dinámico!</p></div>`
const body = document.querySelector("body");
body.innerHTML += template()*/


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
/*const template = () => `"Wubba Lubba dub dub"`
const h2 = document.querySelector("h2.fn-insert-here");
h2.innerHTML += template()*/


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
/*const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const NuevaListaUL = document.createElement('ul')
const body = document.querySelector("body")
body.appendChild(NuevaListaUL)

for (const item of apps) {
	const li = document.createElement("li");
	li.innerHTML =`${item}`
	NuevaListaUL.append(li);
	}*/
    

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
/*const RemoveMe = document.querySelectorAll(".fn-remove-me")
RemoveMe.forEach((element)=> {
element.remove()
})*/

//! 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//!	Recuerda que no solo puedes insertar elementos con .appendChild.
/* const NuevoP = document.createElement('p')
const divSelector = document.querySelector('div')
divSelector.after(NuevoP)
const TextoP= document.createTextNode('Voy en medio!')
NuevoP.appendChild(TextoP) //!NECESITO EXPLICACIONES DEL APPENCHILD*/


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
/*const template = () => `<p>'Voy dentro!</p>`
const selectorDiv = document.querySelectorAll("div.fn-insert-here");

selectorDiv.forEach((element)=> {
element.innerHTML += template()
})*/


