import React, { createContext, useEffect, useState, useContext } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';

//* exportamos el contexto para luego hacer lso custom hooks
export const CochesContext = createContext();

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const CochesProvider = ({ children }) => {
  //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [Coches, setCoches] = useState([]);


  useEffect(() => {
    const obtenerCoches = async () => {
      try {
        //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:8081/api/v1/coches/todos-Coches');
        setCoches(response.data);
      } catch (error) {
        console.error('Error al obtener Coches:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerCoches();
  }, []);
//* generamos el provider que luego llevamos a la app
  return (
    <CochesContext.Provider value={Coches}>
      {children}
    </CochesContext.Provider>
  );
};

