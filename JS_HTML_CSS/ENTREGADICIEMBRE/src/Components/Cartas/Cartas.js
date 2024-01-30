import { FuncionCartas } from "../../Utils/CartasFuncion";
import "./Cartas.css"

// Pinto el contendor de la página y llamo a la función que pinta el tablero
const template = () => `<div id="CartasPage">
<body>
<div id="stats">0 intentos</div>
<div id="wrapper">
   <div id="game"></div>
</div>
<script src="script.js"></script>
</body>
</div></div>

`;


export const PrintCartas = () =>{
 document.querySelector("main").innerHTML = template();

FuncionCartas();

  }

  