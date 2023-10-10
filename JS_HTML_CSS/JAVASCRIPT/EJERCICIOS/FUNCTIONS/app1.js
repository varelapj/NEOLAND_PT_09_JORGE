//! DIFERENCIA ENTRE FUNCTION xx () {} Y XX=()=>{}
function sum (numberOne , numberTwo)   {
    return numberOne < numberTwo ? numberTwo : numberOne
    
    }
    
    sum(1,2)
    
    console.log(sum(1,2))
    
//metodo 2
    const sum2 = (numberOne , numberTwo)   => 
    {return numberOne < numberTwo ? numberTwo : numberOne
    }
    
      sum2(1,2)
      
      console.log(sum2(1,2))


//METODO 3 SIN RETURN Y SIN LLAVES, PORQUE RETURN SIN LLAVES NO FUNCIONA Y LLAVES
//SIN RETURN TAMPOCO
    const sum3 = (numberOne , numberTwo)   => 
    (numberOne < numberTwo) ? numberTwo : numberOne
     
     
       sum3(1,2)
       
       console.log(sum3(7,2))
      
//! FUNCION FOR BUCLE => PERO NO ES FUNCIÓN?

const array1 = [1,2,3,4,5,6];
const array2 = [5,6,7,8];

console.log("miFuncion")

function miFuncion (param) {
for (let i = 0; i<param.length;i++){
    console.log(param)
}}

miFuncion(array1)
//! --------------------------------------------------------------
console.log("BUCLE")

array1.forEach()


array1.forEach((element)=>{
    console.log (element)
  })

  console.log("BUCLE")

//! --------------------------------------------------------------
  console.log("miFuncion2")

  function miFuncion2 (param) {param.forEach((element)=>{
      console.log (param)
    })}
    miFuncion2(array1)

//! --------------------------------------------------------------
    console.log("miFuncion3")

     const miFuncion3 = (param) => {param.forEach((element)=>{
        console.log (element)
      })}
      miFuncion3(array1)


//! DIFERENTES COMPARADORES
//! MISMAS ACCIONES

const animalesRepetidos =
["perro","gato","periquito","pez","perro","gato","perro","periquito","pez"];
const recuentoDos = []; //da igual no incializarla porque cuando hace acc++ la pone a cero

animalesRepetidos.forEach((element) => {
let acc = [] ; 

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

//! -------------------------------------------


