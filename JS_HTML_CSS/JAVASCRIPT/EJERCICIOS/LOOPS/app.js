//! ITERACIÓN 1
//Haz un bucle y muestra por consola todos aquellos valores del
// array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const string = 'Camiseta'

const pantalla = products.filter(a => a.includes(string));
 
console.log(pantalla);

//Métdodo 2 ??? 


function findArray (param, string2) {
    for(a=0; a < param.length ; a++ ){
j = products.filter(k => k.includes(string2));
console.log(j)
}}
findArray(products,'Camiseta')

//! ITERACIÓN 2
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
//aprobados y añade la propiedad isApproved 
//a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

console.log(alumns)

const condicion0 = (alumns[0].T1==true && alumns[0].T2==true) ?
alumns[0].isApproved= "true":
(alumns[0].T2==true && alumns[0].T3==true)?
alumns[0].isApproved= "true":
(alumns[0].T1==true && alumns[0].T3==true)?
alumns[0].isApproved= "true":
alumns[0].isApproved= "false";

const condicion1 = (alumns[1].T1==true && alumns[1].T2==true) ?
alumns[1].isApproved= "true":
(alumns[1].T2==true && alumns[1].T3==true)?
alumns[1].isApproved= "true":
(alumns[1].T1==true && alumns[1].T3==true)?
alumns[1].isApproved= "true":
alumns[1].isApproved= "false";

const condicion2 = (alumns[2].T1==true && alumns[2].T2==true) ?
alumns[2].isApproved= "true":
(alumns[2].T2==true && alumns[2].T3==true)?
alumns[2].isApproved= "true":
(alumns[2].T1==true && alumns[2].T3==true)?
alumns[2].isApproved= "true":
alumns[2].isApproved= "false";

const condicion3 = (alumns[3].T1==true && alumns[3].T2==true) ?
alumns[3].isApproved= "true":
(alumns[3].T2==true && alumns[3].T3==true)?
alumns[3].isApproved= "true":
(alumns[3].T1==true && alumns[3].T3==true)?
alumns[3].isApproved= "true":
alumns[3].isApproved= "false";

const condicion4 =(alumns[4].T1==true && alumns[4].T2==true) ?
alumns[4].isApproved= "true":
(alumns[4].T2==true && alumns[4].T3==true)?
alumns[4].isApproved= "true":
(alumns[4].T1==true && alumns[4].T3==true)?
alumns[4].isApproved= "true":
alumns[4].isApproved= "false";

console.log(alumns)

//Metodo 2
function condicion5 (param){
for (f=0;f<param.length;f++){
(param[f].T1==true && param[f].T2==true) ?
param[f].isApproved= "true":
(param[f].T2==true && param[f].T3==true)?
param[f].isApproved= "true":
(param[f].T1==true && param[f].T3==true)?
param[f].isApproved= "true":
param[f].isApproved= "false";

}}
condicion5(alumns)
console.log(alumns)


//! ITERACIÓN 3
//Usa un bucle forof para recorrer todos los destinos del array. 
//Imprime en un console.log sus valores.
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const element of placesToTravel) {
    console.log(element);
  }


//! ITERACIÓN 4
//Usa un for...in para imprimir por consola los datos del alienígena..
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const property in alien) {
    console.log(property+": "+alien[property]);
  }

  //Metodo 2
  for (const property2 in alien) {
    console.log(`${property2}: ${alien[property2]}`);
  }
  

//! ITERACIÓN 5
//Usa un bucle for para recorrer todos los destinos del array y elimina
// los elementos que tengan el id 11 y 40. Imprime en un console log el array. 
const placesToTravel2 = 
[{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'},
{id: 59, name: 'Madagascar'}]

function eliminaDestino (param,id1,id2){
let t = []; let e=[]
    {
       for(let o = 0; o < param.length; o++) {
           let obj = param[o];
           if(obj.id == id1) {
            t=  o} else if 
            (obj.id == id2) {
                 e=  o}
           }   return [t,e]
         }
   
     }

  
  for (const g of  eliminaDestino(placesToTravel2,11,40).reverse()) {
    placesToTravel2.splice(g, 1);
  }
   console.log(placesToTravel2)


//! ITERACIÓN 6
//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la 
//palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    



function findArray3 (param, string3) {
    for(a=0; a < param.length ; a++ ){
j = products.filter(k => k.includes(string2));
console.log(j)
}}
findArray3(toys,'gato')
   


//! ITERACIÓN 7
//Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más 
//de 15 ventas (sellCount) al array popularToys. Imprimelo por consola..
const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]