import React from 'react';

function Tarea({ tarea, eliminarTarea }) {
  const handleEliminar = () => {
    eliminarTarea(tarea);
  };

  return (
    <div>
      <span>{tarea}</span>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}

export default Tarea;
