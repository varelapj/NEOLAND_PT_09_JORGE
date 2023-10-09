//!ITERACIÓN 1
// Crea una variable llamada `myFavoriteHero`, asigna el valor `Hulk` a ella.
let myFavoriteHero 
myFavoriteHero = "Hulk"
console.log (myFavoriteHero)


//Crea una variable llamada `x`, asigna el valor `50` a ella.
const X = 50


//Crea una variable llamada `h` con el valor `5` y otra `y` con el valor `10`. 
const h = 5
const y =10


//Crea una otra variable `z` y asignale el valor de `h + y`.
let z = h + y
console.log (z)

//! ITERACIÓN 2
// Dado el siguiente javascript, cambia el valor de la propiedad `age` a `250`.
const character = {name: 'Jack Frost', age: 10};
character.age = 25


//Declara 3 variables con los nombres y valores siguientes:
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 



//Guarda los valores en sentence con la siguiente estructura:
console.log ("Soy "+ firstName+" "+lastName+" y tengo "+age+" años")


//Dado el siguiente javascript, guarda en una variable la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price)

// Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice
console.log (car1);
console.log (car2)


//! ITERACIÓN 3
// Multiplica 10 por 5 y muestra el resultado mediante console.
console.log (10*5);


// Divide 10 por 2 y muestra el resultado en un console.
console.log (10*2);


// Muestra mediante un console el resto de dividir 15 por 9.
console.log (15*9);


// Usa el correcto operador de asignación que resultará en o = 15, 
//teniendo dos variables p = 10 y j = 5.
let p = 10;
let j = 5;
let o = p+j;
console.log (o);


// Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.
let c = 10;
let m = 5;
let i = c*m;
console.log (i)






//! ITERACIÓN 4
//  Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log (avengers[0])


// Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0]="IRONMAN"
console.log(avengers)


// console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length)


//  Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]
rickAndMortyCharacters.push ("Morty" , "Summer");


console.log(rickAndMortyCharacters)
//  Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop ();
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[0],rickAndMortyCharacters[rickAndMortyCharacters.length-1])


// Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
delete (rickAndMortyCharacters[1]);
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);


//! ITERACIÓN 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 ===2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2 ) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 === number1) {
 console.log("number3 por 5 es igual a number1");
}

 if(number3*5 === number1 && number1*2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 === number1 || number1/5 ===number3) {
console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//! ITERACIÓN 6

// Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let a=0; a <10; a++){
  console.log (a);
}

//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.

for (a=0; a <10; a++){
 if (a % 2 == 0)
  {console.log (a)}
}

//Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
//y cambia el mensaje en la décima vuelta a 'Dormido!'.
for (let b=0; b <10; b++){
  if(b<2) {
    console.log ("Intentando dormir🐑");
  } else if (b<3) {
    console.log ("Intentando dormir🐑🐑");
  } else if(b<4) {
    console.log ("Intentando dormir🐑🐑🐑");
  } else if (b<5) {
    console.log ("Intentando dormir🐑🐑🐑🐑");
  } else if (b<6) {
    console.log ("Intentando dormir🐑🐑🐑🐑🐑");
  } else if(b<7) {
    console.log ("Intentando dormir🐑🐑🐑🐑🐑🐑");
  } else if (b<8) {
    console.log ("Intentando dormir🐑🐑🐑🐑🐑🐑🐑");
  } else if (b<9) {
    console.log ("Intentando dormir🐑🐑🐑🐑🐑🐑🐑🐑");
  } else  {
    console.log ("Dormido!");
  } ;
}

//! Extra con ternarios

for (let b=0; b <10; b++){
  (b<2) ?  
  console.log ("Intentando dormir🐑"):
  (b<3)?  
  console.log ("Intentando dormir🐑🐑"):
  (b<4) ?  
  console.log ("Intentando dormir🐑🐑🐑"):
  (b<5) ?
  console.log ("Intentando dormir🐑🐑🐑🐑"):
  (b<6) ?
  console.log ( "Intentando dormir🐑🐑🐑🐑🐑"):
  (b<7) ?
  console.log ("Intentando dormir🐑🐑🐑🐑🐑🐑"):
  (b<8) ?
  console.log ("Intentando dormir🐑🐑🐑🐑🐑🐑🐑"):
  (b<9)? 
  console.log ( "Intentando dormir🐑🐑🐑🐑🐑🐑🐑🐑"):
  console.log ("Dormido!")

}


for (let k=0; k <10; k++){
  if(k<9) {
    console.log ("Intentando dormir🐑");
  } else  {
    console.log ("Dormido!");
  } ;
}