console.log("ESTA ES LA ITERACIÓN 1");
let myFavoriteHero ;
myFavoriteHero = "Hulk"

console.log (myFavoriteHero)

const X = 50
const h = 5
const y =10
let z = h + y
console.log (z)

//!------------------INTERACTION2
console.log("ESTA ES LA ITERACIÓN 2");
const character = {name: 'Jack Sparrow', age: 10}
character.age = 25

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log ("Soy "+ firstName)

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price)

//! Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//! y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//! basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice
console.log (car1);
console.log (car2)


//!------------------INTERACTION3
console.log("ESTA ES LA ITERACIÓN 3");

console.log (10*5);
console.log (10*2);
console.log (15*9);

let p = 10;
let j = 5;
console.log (p+j);
console.log (p*j)


//!------------------ITERACIÓN4
//! 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
//! const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log (avengers[0])

//! 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//! const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0]="IRONMAN"
console.log(avengers)
//! 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
//! const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length)

//! 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//! Muestra en consola el último personaje del array
//! const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]
rickAndMortyCharacters.push ("Morty" , "Summer");

console.log(rickAndMortyCharacters)
//! 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//! const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop ();
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[0],rickAndMortyCharacters[rickAndMortyCharacters.length-1])
//! 1.6 Elimina el segundo elemento del array y muestra el array por consola.
//! const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
delete (rickAndMortyCharacters[1]);
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);

//! ------- ITERACIÓN 6

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