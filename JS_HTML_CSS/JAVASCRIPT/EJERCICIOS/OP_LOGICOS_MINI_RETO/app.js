
//!------------------MINI-RETO
console.log("ESTE ES EL MINI-RETO DE OPERADORES LÓGICOS");

let planet;
planet = 'Tierra';

let isInnerPlanet;
isInnerPlanet = true;

let hasAtmosphere;
hasAtmosphere = true;

let isHabitable = isInnerPlanet && hasAtmosphere; //! || or
console.log(isHabitable)

//!------------------EXTRA

if(isInnerPlanet && hasAtmosphere){
    console.log (`La ${planet} es habitable`) //! template string
} else {
    console.log (`La ${planet} no es habitable`)
}
console.log(isHabitable)

//!console.log ("La " + planet + " es habitable") ;
//!console.log ("La " && planet && " es habitable") 