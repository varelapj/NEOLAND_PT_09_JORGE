//*! CÓDIGO SERGIO | usamos basicpage con props de título y descripción
//! que se pintarán en h1 y p


// PUBLICO
import { BasicPage } from "../components/BasicPage";

export const SignUpPage = () => {
  return (
    <BasicPage
      title='Setting Page'
      description='Welcome to Settings - Protected Route'
    />
  );
};
