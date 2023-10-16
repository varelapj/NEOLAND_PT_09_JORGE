
const animalesRepetidos =
["perro","gato","periquito","pez","perro","gato","perro","periquito","pez"];
const recuentoDos = []; //da igual no incializarla porque cuando hace acc++ la pone a cero

animalesRepetidos.forEach((element) => {
let acc =  []; 

recuentoDos.forEach((especie)=>{
if(element == especie.palabra) acc++;})

if (acc==0){
  acc= 0;
  animalesRepetidos.forEach((item)=>{
  if(element == item) acc++; })

  recuentoDos.push({palabra: element, repeticiones: acc})
  }
})

console.log(recuentoDos)

let prueba = []
if (prueba==0) console.log("Igual a 0")