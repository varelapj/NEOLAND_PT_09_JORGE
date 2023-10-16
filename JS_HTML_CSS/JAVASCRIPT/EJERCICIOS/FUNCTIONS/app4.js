//! ITERACIÓN 5
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumMixedElements  (param) {

const nuevoArray =[];
for (var i = 0 ; i < param.length ; i++){
(typeof param[i] == "number")?
nuevoArray.push(param[i]):
nuevoArray.push(param[i].length)

}

let totalMixed=0;
for(let k of nuevoArray ) {
  totalMixed+=k;
  
}
console.log(totalMixed)
}

sumMixedElements(mixedElements);
