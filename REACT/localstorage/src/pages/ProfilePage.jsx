//*! CÓDIGO SERGIO | usamos basicpage con props de título y descripción
//! que se pintarán en h1 y p

import { BasicPage } from "../components/BasicPage";

export const ProfilePage = () => {
  return (
    <BasicPage
      title='Profile Page'
      description='Welcome to Profile - Protected Route'
    />
  );
};
