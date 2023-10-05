
// 1. Crea una variable llamada **`planet`** y asígnale el valor "Tierra"
let planet;
planet = 'Tierra';


//Crea una variable llamada isInnerPlanet y 
//asígnale el valor true (la Tierra es un planeta interno)
let isInnerPlanet;
isInnerPlanet = true;


//Crea una variable llamada hasAtmosphere y
// asígnale el valor true (la Tierra tiene atmósfera)
let hasAtmosphere;
hasAtmosphere = true;


//Utiliza un operador lógico && (AND) para combinar las variables isInnerPlanet y
// hasAtmosphere en una expresión 
//lógica que evalúe a true. Almacena el resultado en una variable llamada isHabitable.
let isHabitable = isInnerPlanet && hasAtmosphere; //! || or


//Utiliza una declaración console.log para imprimir el valor de la variable 
//isHabitable en la consola. Debería mostrarse true.
console.log(isHabitable)


//!------------------EXTRA

if(isInnerPlanet && hasAtmosphere){
    console.log (`La ${planet} es habitable`) //! template string
} else {
    console.log (`La ${planet} no es habitable`)
}
console.log(isHabitable)

console.log ("La " + planet + " es habitable") ;
console.log ("La " && planet && " es habitable") 