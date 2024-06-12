import App from "./App";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { AuthProvider } from "./context/authcontext";
import { ConductoresProvider } from './context/conductoresContext';
import { MultasProvider } from "./context/multasContext";
import { CochesProvider } from "./context/cochesContext";
import { ComentariosProvider } from "./context/comentariosContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  // //* El react strict mode activa avisos y advertencias sobre posibles fallos
  //* en la consola. Sirve para poder adaptarte a futuras versiones de react
  <React.StrictMode>
    {/* //* METEMOS EL BROWSE ROUTER DE REACT DOM PARA PODER NAVEGAR y enrutar
    //* diferente al outlet que lo que hace es pintarte la página de esa ruta debajo */}
    <BrowserRouter>
    {/* //* METEMOS LOS PROVIDER DE LOS CONTEXTOS ENVOLVIENDO,TODOS, A APP 
    */}
        <ConductoresProvider>
          <CochesProvider>
        <MultasProvider>
      <AuthProvider>
      <ComentariosProvider>
        <App />
        </ComentariosProvider>
      </AuthProvider>
      </MultasProvider>
      </CochesProvider>
      </ConductoresProvider>
    </BrowserRouter>
  </React.StrictMode>
);
