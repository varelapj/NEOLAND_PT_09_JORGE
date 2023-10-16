/***Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.*/

let jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

swap = (param1,param2,param3)=> {
    let valorParam2 =   param1[param2];
    let valorParam3 = param1[param3];
    param1[param2] = valorParam3;
    param1[param3] = valorParam2; 
    console.log(param1)
    }
swap(jugadores,0,3)