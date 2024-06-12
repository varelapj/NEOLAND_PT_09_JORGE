import React, { createContext, useEffect, useState, useContext, useReducer } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';

//* exportamos el contexto para luego hacer lso custom hooks
export const MultasContext = createContext();

//! Aquí intenté hacerlo con un reducer, pero bueno, luego el context
//! usa el dispatch de esta reducer, pero que no hace nada, sol odevuelve el estado
const multasReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MULTAS':
      return action.payload;
    default:
      return state;
  }
};

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const MultasProvider = ({ children }) => {
    //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [multas, dispatchMultas] = useReducer(multasReducer, []);

  useEffect(() => {
    const obtenerMultas = async () => {
      try {
                //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:8081/api/v1/multas/todas-multas');
        dispatchMultas({ type: 'SET_MULTAS', payload: response.data });
      } catch (error) {
        console.error('Error al obtener Multas:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerMultas();
  }, [multas]);
//* generamos el provider que luego llevamos a la app
  return (
    <MultasContext.Provider value={multas}>
      {children}
    </MultasContext.Provider>
  );
};

