import  {PrintHeader} from "../Components/Estructura/Header/Header"
import  {PrintMain} from "../Components/Estructura/Main/Main"
import  {PrintFooter} from "../Components/Estructura/Footer/Footer"
import { Listeners } from "../Components/Nav/Nav"

export const Inittemplate =()=>{
PrintHeader();
PrintMain();
PrintFooter();
Listeners();
}

