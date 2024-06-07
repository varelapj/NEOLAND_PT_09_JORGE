//! Código mezclado, comentarios mezclados

/* eslint-disable react/prop-types */ // Desactivamos la regla de ESLint para la validación de tipos de props en este archivo.

import { useNavigate } from "react-router-dom"; // Importamos useNavigate de react-router-dom para la navegación programática.
import { useAuth } from "../hooks/useAuth"; // Importamos useAuth, un hook personalizado para acceder al contexto de autenticación.

// Definimos el componente AppBar, que recibe una prop llamada pages.
export const AppBar = ({ pages }) => {
  const navigate = useNavigate(); // Obtenemos la función navigate usando el hook useNavigate.
  //* USAMOS NUESTRO CUSTOM HOOK USEAUTH QUE A SU VEZ TIRA DEL CONTEXTO AUTHCONTEXT
  const { user, logout } = useAuth(); // Usamos useAuth para obtener el usuario autenticado y la función logout del contexto de autenticación.

  // Definimos una función para manejar la navegación a una ruta específica.
  const handleNavigate = (path) => {
    if (path) {
      // Si la ruta está definida,
      navigate(path); // navegamos a esa ruta.
    }
  };

  return (
    // JSX que define la barra de navegación.
    <nav>
      <span>React Router Auth</span>{" "}
      {/* Texto que se muestra en la barra de navegación */}
      {/* Iteramos sobre el array pages para crear un botón por cada página */}
      {/* //* ESTA ES LA FUNCIÓN DE LA BARRA, CON NAVIGATE */}
      {pages?.map((page) => (
        <button key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}{" "}
          {/* Etiqueta del botón, que corresponde a la label de la página */}
        </button>
      ))}
      {/* Si el usuario está autenticado, mostramos el botón de logout */}
{/* //*La expresión !!USER && verifica que USER es true antes de proceder con una operación adicional.
 //* Si USER es true la evaluación continúa con la expresión después del &&; 
 //* si no, la evaluación se detiene
  //! si hay valor en user sigue (&&) y pinta el botón, si no, se detiene y no lo pinta. */}
      {!!user && (
        <button key={"logout"} onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
};
