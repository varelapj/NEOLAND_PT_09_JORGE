//*! CÓDIGO SERGIO | usamos basicpage con props de título y descripción
//! que se pintarán en h1 y p

// PUBLICO
import { BasicPage } from "../components/BasicPage";

export const HomePage = () => {
  return (
    <BasicPage title='Home Page' description='Welcome to Auth || Routing' />
  );
};
