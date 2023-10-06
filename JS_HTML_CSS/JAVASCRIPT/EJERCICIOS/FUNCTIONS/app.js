//! ITERACIÓN 1

// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum (numberOne , numberTwo)   {
return numberOne < numberTwo ? numberTwo : numberOne

}

sum(1,2)

console.log(sum(7,2))


//! ITERACIÓN 2
//Completa la función que tomando un array de strings como argumento devuelva el 
//más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
let lgth = 0;
let longest;

for (let i = 0; i < param.length; i++) {
  if (param[i].length > lgth) {
    lgth = param[i].length;
    longest = param[i];
  }
}
console.log(longest)
}
findLongestWord(avengers)

//! ITERACIÓN 3
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento 
//y devuelve la suma de todos los números de la matriz. 
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(param) {
  let total=0
  for(let i of param) total+=i;
console.log(total);
}

sumNumbers(numbers)


//! ITERACIÓN 4
//Calcular un promedio es una tarea extremadamente común.
const numbersAvg = [12, 21, 38, 5, 45, 37, 6];

function average(paramAvg) {
  let totalAvg=0
    for(let i of paramAvg) totalAvg+=i;
  console.log(totalAvg/paramAvg.length);
  }
  
  average(numbersAvg)



//! ITERACIÓN 5
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumMixedElements(param) 
{
  const nuevoArray=[];
  for (var i = 0; i < param.length; i++) {

    return 
     let respuesta = (typeof param[i] == "number") ?
   nuevoArray.push (param[i]):

    (typeof param[i] == "string") ?
    nuevoArray.push (param[i].length):

    nuevoArray
   }
   let totalMixed=0;
   for(let k of nuevoArray) totalMixed+=k
   console.log (totalMixed)
} 
sumMixedElements(mixedElements)



//! ITERACIÓN 6
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param)  {
  return param.filter((value,index)=>param.indexOf(value) === index);
  }
  console.log(removeDuplicates(duplicates));

//! ITERACIÓN 7
//Crea una función que reciba por parámetro un array y el valor que desea 
//comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso de que
// existan nos devuelve un true y la posición de dicho elemento y 
//por la contra un false. 
const nameFinder = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'
];

  function finderName(param,palabra) {
    param.includes(palabra)?
    console.log(`${param.includes(palabra)} ${param.indexOf(palabra)}`):
    console.log("false")
  }

finderName(nameFinder,'eat')

//! ITERACIÓN 8
//Crea una función que nos devuelva el
// número de veces que se repite cada una de las palabras que lo conforma. 

const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
const count = {};

counterWords.forEach(param => {

  count[param] = (count[param] || 0) + 1;

});


console.log(count);



