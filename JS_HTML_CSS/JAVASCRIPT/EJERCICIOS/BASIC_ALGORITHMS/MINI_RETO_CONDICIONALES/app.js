//1. Crea una variable llamada **`character`** y asígnale el valor "Legolas"
let character;
character = "Legolas";
console.log(character)


//2. Crea una variable llamada **`race`** y asígnale el valor "Elfo"
let race;
race = "Elfo"
console.log(race)


//3. Crea una variable llamada **`hasRing`** y asígnale el valor **`false`** 
//(Legolas no tiene el Anillo Único)
let hasRing;
hasRing = false;
console.log(hasRing)


//4. Crea una variable llamada **`isArcher`** y asígnale el valor
// **`true`** (Legolas es un arquero)
let isArcher;
isArcher = true;
console.log(isArcher)


//5. Utiliza un condicional **`if`** para evaluar si **`hasRing`** 
//es **`true`**. Si lo es, imprime en la consola el mensaje 
//"Legolas es el portador del Anillo Único"
if(hasRing==true) console.log("Legolas es el portador del Anillo Único")


//6. Utiliza **`else if`** para evaluar si **`isArcher`** es 
//**`true`**. Si lo es, imprime en la consola el mensaje "Legolas es un arquero experto"
if (isArcher==true) {
    console.log("Legolas es un arquero experto");
} else if (isArcher==false) {
    console.log("Legolas no es un arquero experto");
}


//7. Utiliza  **`else`** para imprimir en la consola el mensaje
// "Legolas es un guerrero valiente"
if(hasRing==true) {
    console.log("Legolas es el portador del Anillo Único");
} else  console.log("Legolas es un guerrero valiente")