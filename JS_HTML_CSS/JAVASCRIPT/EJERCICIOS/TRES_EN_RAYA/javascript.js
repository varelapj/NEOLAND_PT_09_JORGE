let Turno = 0;
const Casillas = [];

export const BotonPulsado = (EventoClick, IndiceTirada) => {
    Turno++;
    const Boton1 = EventoClick.target;

    const CambioColorFondo = (Turno % 2) ?
    '#737e8d' : 'white'

    Boton1.style.backgroundColor = CambioColorFondo;


    const CambioColorBorde = (Turno % 2) ?
    'solid white' : 'solid #737e8d'  

    Boton1.style.border = CambioColorBorde;
 

   Casillas[IndiceTirada] =  CambioColorFondo;
   alert(Ganador())
}

const Ganador = () =>{
    if(Casillas[0] == Casillas[1] && Casillas[0] == Casillas[2] 
        && Casillas[0]){
            return true;
        } else if
        (Casillas[3] == Casillas[4] && Casillas[3] == Casillas[5] 
            && Casillas[3]){
                return true;
            }else if
            (Casillas[6] == Casillas[7] && Casillas[6] == Casillas[8] 
                && Casillas[6]){
                    return true;
                }else if
                (Casillas[0] == Casillas[3] && Casillas[0] == Casillas[6] 
                    && Casillas[0]){
                        return true;
                    }else if
                    (Casillas[1] == Casillas[4] && Casillas[1] == Casillas[7] 
                        && Casillas[1]){
                            return true;
                        }else if
                        (Casillas[2] == Casillas[5] && Casillas[2] == Casillas[8] 
                            && Casillas[2]){
                                return true;
                            }else if
                            (Casillas[0] == Casillas[4] && Casillas[0] == Casillas[8] 
                                && Casillas[0]){
                                    return true;
                                }else if
                                (Casillas[2] == Casillas[4] && Casillas[2] == Casillas[6] 
                                    && Casillas[2]){
                                        return true;
                                    }return false
}


document.querySelectorAll('.BotonTres').forEach(
   (cuadro, indice1) => cuadro.addEventListener('click', 
   (EventoClick)=> BotonPulsado(EventoClick,indice1)));
