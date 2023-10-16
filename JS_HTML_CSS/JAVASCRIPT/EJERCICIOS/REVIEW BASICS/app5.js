/***Iteración #5: Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que
 tenga el dado que deberá  simular el codigo dentro de la función. Como hemos dicho, que la
  función use el parametro para simular una tirada de dado y retornar el resultado.
   Si no se te ocurre como hacer 
un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();***/

let caras = (Math.random()* (7-1)+1).toString()[0]
let rollDice = (param1) =>{


console.log(param1)

}

rollDice(caras)