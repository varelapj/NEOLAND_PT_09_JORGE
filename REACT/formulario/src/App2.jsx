//* Usaremos usetate para definir nuestro estado inicial
import { useState } from 'react'

import './App.css'

function App() {
  //* Usaremos usetate para definir nuestro estado inicial
  //* como un objeto de nombre, email y contraseña
  const [formData, setFormData] = useState({
 nombre:'',
 email:'',
 contrasena:'', 
  })

//* Generamos una función que en el evento, el click, nos cambie el setformdata del usestate
const handleChange = (evento) => {
  setFormData({
    // cógeme lo que haya
    ...formData,
    //captura el value que meto, asociado por la calve name
    // porque esta función se reutilizará en cada input
    //* se asignará en la propiedad value del input
    [evento.target.name]:evento.target.value
  })
}


  //* Generamos una función que 'captura' el evento, para prevenir que el formulario se renderice
  //* cada vez que apretamos el botón.
  //*LA ursaremos en la etiqueta onsubmit del formulario abajo
  const handleSubmit = (evento) =>{
    //* PReventdefault elimina el comportamiento de re-renderciar, y lanza 
    //* nuestro código (console.log)
    evento.preventDefault();
    console.log(formData);
  };


//*Definimos el formulario por HTML
  return (
    // usamos el handle submit
   <form onSubmit={handleSubmit}>

<div><label htmlFor='nombre'>Nombre:</label>
{/* usamos el handlechange en el onclick, para capturar el evento 
//!se ejecuta primero el onchange y luego elvalue?*/}
{/* //*! POR QUÉ NAME Y NO SOLO EL ID? */}
<input type='text' id='nombre' name='nombre' value={formData.value} onChange={handleChange}></input></div>

<div><label htmlFor='apellido'>Apellido:</label>
<input type='text' id='apellido' name='apellido' value={formData.value} onChange={handleChange}></input></div>

<div><label htmlFor='contrasena'>Nombre:</label>
<input type='text' id='contrasena' name='contrasena' value={formData.value} onChange={handleChange}></input></div>

<button type='submit'>Enviar Formulario</button>
   </form>
  )
}

export default App
