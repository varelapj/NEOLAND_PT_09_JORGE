import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import './App.css'

// var Frutas = []

// function AnadirFruta (Fruta){
//   Frutas = [...Frutas,Fruta]
// }

// AnadirFruta("Pera");
// AnadirFruta("Melón");
// AnadirFruta("Plátano");
// // var Eliminado = []
// // var Indice = Frutas.length-1

// // function EliminarFruta (){
// //  Eliminado =  Frutas[Indice]
// //  console.log(Eliminado)
// //  delete Frutas[Indice] 
// // }

// // EliminarFruta()

// // var MapFrutas = []
// // function AnadirFrutaMap (Fruta){
// //   MapFrutas = [...Frutas,Fruta]
// // }
// var MapFrutas = []
// function AnadirFrutaMap (Fruta){
//   MapFrutas = [Fruta]
// }


// // for (let i = 1; i < Frutas.length; i++) {
// //   AnadirFrutaMap(Frutas[i]);
// // }

// function FilterFrutas(Frutas, Fruta) {
//   for (let i = 0; i < Frutas.length; i++) {
//     if ( Fruta==Frutas[i]) {
//       AnadirFrutaMap(Fruta);
//     }
//   }
// }


// FilterFrutas(Frutas,"Aguacate")
// function App() {

//   console.log(MapFrutas)
//   return (
//     <>


//     </>
//   )
// }

// export default App


// const numeros = [1, 2, 3, 4, 5];

// function reverseNumeros() {
//   let numeresReverse = []; 
//   for (let i = numeros.length - 1; i >= 0; i--) {
//     numeresReverse.push(numeros[i]);
//   }
//   return numeresReverse;  
// }

// function App() {
//  // const reversedArray = reverseNumeros();  
//   console.log(reverseNumeros()); 
// }
// export default App



// const numeros = [1, 2, 3, 4, 5];

// function sliceNumeros(inicio,fin) {
//   var numerosSlice = []; 
//   for (let i = inicio; i < fin; i++) {
//         numerosSlice.push(numeros[i]);
//       }
//   return numerosSlice;  
// }

// function App() {

//   console.log(sliceNumeros(1,3)); 
// }
// export default App

// const numeros = [1, 2, 3, 4, 5];

// function spliceNumeros(inicio, fin, elemento1, elemento2) {
//   var numerosSplice = [];
  
//   for (let i = 0; i < inicio; i++) {
//     numerosSplice.push(numeros[i]);
//   }


//   numerosSplice.push(elemento1);
//   numerosSplice.push(elemento2);


//   for (let i = fin; i < numeros.length; i++) {
//     numerosSplice.push(numeros[i]);
//   }

//   return numerosSplice;
// }

// function App() {
//   console.log(spliceNumeros(1, 3, 8, 9)); 
// }

// export default App;


const numeros = [1, 2, 3, 4, 5];

function spliceNumeros(inicio, fin, ...nuevosElementos) {
  var numerosSplice = [];
  

  for (let i = 0; i < inicio; i++) {
    numerosSplice.push(numeros[i]);
  }

  for (const elemento of nuevosElementos) {
    numerosSplice.push(elemento);
  }


  for (let i = fin; i < numeros.length; i++) {
    numerosSplice.push(numeros[i]);
  }

  return numerosSplice;
}

function App() {
  console.log(spliceNumeros(1,3,4,5,6,"pera"))}
  export default App;
