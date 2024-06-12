import React, { createContext, useEffect, useState, useContext } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';

//* exportamos el contexto para luego hacer lso custom hooks
export const ConductoresContext = createContext();

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const ConductoresProvider = ({ children }) => {
    //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [conductores, setConductores] = useState([]);

  useEffect(() => {
    const obtenerConductores = async () => {
      try {
                //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:8081/api/v1/conductores/todos-conductores');
        setConductores(response.data);
      } catch (error) {
        console.error('Error al obtener conductores:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerConductores();
  }, []);
//* generamos el provider que luego llevamos a la app
  return (
    <ConductoresContext.Provider value={conductores}>
      {children}
    </ConductoresContext.Provider>
  );
};
