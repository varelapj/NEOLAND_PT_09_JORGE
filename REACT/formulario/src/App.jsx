//* Usaremos usetate para definir nuestro estado inicial
import { useState } from 'react'
//* importamos useForm de la librería react-hook-form para poder trabajr con 
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  //* destructuramos las funcionalidades que necesitamos de useForm
  // register son las validaciones
 const {register, handleSubmit, formState:{errors}} = useForm()

//* para imprimir el formulario en 
 const onSubmitCustom = (data) => 
  
  {console.log(data)}
    //*'captura' el evento, para prevenir que el formulario se renderice cada vez que apretamos el botón. 
  //* Aquí lo metemos directamente en el form, no lo extraemos en una función
 return(
<form onSubmit={handleSubmit((data) => console.log(data))}>

  <div>
    <label htmlFor="nombre">Nombre</label>
    {/* //*trae todo lo que hay en el formulario con la etiqueta 'name
    //*  y le pone un mensaje de requerimiento */}
    <input type="text" id="nombre" {...register("nombre",{required:'Nombre obligatorio'})}/>
{errors.name && <p>{errors.name.message}</p>}
  </div>

  <div>
    <label htmlFor="correo">Correo</label>
    {/* //*trae todo lo que hay en el formulario con la etiqueta 'email
    //*  y le pone un mensaje de requerimiento */}
    <input type="text" id="correo" {...register('correo',{required:'Correo obligatorio',
    //* le ponemos los requerimientos del  con expresiones regulares
      pattern:{
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message:"Correo no válido en fomrato",
      }
    })}/>
{errors.name && <p>{errors.name.message}</p>}
  </div>

  <button type='submit'>Enviar Formulario</button>
</form>

 )
}

export default App
