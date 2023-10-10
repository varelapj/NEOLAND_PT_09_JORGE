
const animalesRepetidos =
["perro","gato","periquito","pez","perro","gato","perro","periquito","pez"];
const recuentoDos = [];

animalesRepetidos.forEach((element) => {
let acc = 0;


recuentoDos.forEach((especie)=>
{
  console.log("forechaespecie "+acc+" especie "+especie.palabra+ " es igual a element "+element+" entonces "+ acc)
  
if(element == especie.palabra) acc++ //basicamente le suma 1 para sacarlo del siguiente bucle y no hace nada mas
;
    }
  )

if (acc==0){ //este if con sus bucles los recorre y los suma
  acc= 0;
  animalesRepetidos.forEach((item)=>{
    console.log("forechaitem es item "+item+" igual a element "+element+" "+acc)
  if(element == item) acc++; 
  console.log( "entonces "+acc)
}
  )
  recuentoDos.push({palabra: element, repeticiones: acc})
  console.log(recuentoDos)



}
})


console.log(recuentoDos)