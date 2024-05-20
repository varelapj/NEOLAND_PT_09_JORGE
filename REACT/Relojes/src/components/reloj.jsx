import "./reloj.css"
import React, { useState, useEffect } from 'react';


  export const Reloj = () => {
    const [hora, setHora] = useState(new Date());
   

    useEffect(() => {
        const intervalo = setInterval(() => {
          // Actualizar la hora cada segundo
          console.log(intervalo)
          setHora(new Date());
        }, 1000);
    
        // Limpieza del intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
      }, []); // El array vacío como segundo argumento garantiza que este efecto se ejecute solo una vez, similar al componentDidMount
    

    return (<div>{hora.toString()}</div>)
  };
  
  