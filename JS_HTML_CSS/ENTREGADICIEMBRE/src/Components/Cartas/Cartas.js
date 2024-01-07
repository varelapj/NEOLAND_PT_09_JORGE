import { FuncionCartas } from "../../Utils/CartasFuncion";


// Pinto el contendor de la página y llamo a la función que pinta el tablero
const template = () => `<div id="CartasPage">

 </div>
`;


export const PrintCartas = () =>{
 document.querySelector("main").innerHTML = template();

FuncionCartas();

  }

  