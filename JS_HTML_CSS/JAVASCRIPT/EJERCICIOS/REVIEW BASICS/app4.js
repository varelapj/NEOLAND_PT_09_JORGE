/***Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y
 devuelve la posición del array cuando el valor del array sea
 igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.*/

 let arrayTextos = ["Crea una función","llamada findArrayIndex","que reciba como parametros","un array de textos y un texto"]
let texto = "que reciba como parametros"

 let findArrayIndex = (param1, param2) => {
   console.log(param1.indexOf(param2))
}

findArrayIndex(arrayTextos,texto)