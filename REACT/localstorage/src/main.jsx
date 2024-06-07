import App from "./App";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { AuthProvider } from "./context/authcontext";


ReactDOM.createRoot(document.getElementById("root")).render(
  // //* El react strict mode activa avisos y advertencias sobre posibles fallos
  //* en la consola. Sirve para poder adaptarte a futuras versiones de react
  <React.StrictMode>
    {/* //* METEMOS EL BROWSE ROUTER DE REACT DOM PARA PODER NAVEGAR y enrutar */}
    <BrowserRouter>
    {/* //* METEMOS EL CONTEXTO DEL PROVIDER ENVOLVIENDO A TODOS LOS COMPONENTES DE APP 
    //* diferente al outlet que lo que hace es pintarte la página de esa ruta debajo*/}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
