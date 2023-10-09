//! DIFERENCIA ENTRE FUNCTION xx () {} Y XX=()=>{}
function sum (numberOne , numberTwo)   {
    return numberOne < numberTwo ? numberTwo : numberOne
    
    }
    
    sum(1,2)
    
    console.log(sum(7,2))
    
//metodo 2
    sum2 = (numberOne , numberTwo)   => 
    {return numberOne < numberTwo ? numberTwo : numberOne
    }
    
      sum2(1,2)
      
      console.log(sum2(7,2))
      
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

array1.forEach((element)=>{
    console.log (array1)
  })

//! --------------------------------------------------------------
  console.log("miFuncion2")

  function miFuncion2 (param) {param.forEach((element)=>{
      console.log (param)
    })}
    miFuncion2(array1)

//! --------------------------------------------------------------
    console.log("miFuncion3")

     miFuncion3 = (param) => {param.forEach((element)=>{
        console.log (param)
      })}
      miFuncion3(array1)


//! DIFERENTES COMPARADORES
//! MISMAS ACCIONES