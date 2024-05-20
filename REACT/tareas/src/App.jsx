import { useState } from 'react'
import './App.css'
import { ListaTareas } from './components/listatareas/listatareas';
import {Tarea} from './components/eliminartarea/eliminartarea';


function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleChange}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>     <Tarea />
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
          
        ))}
        <Tarea Tarea={nuevaTarea} > </Tarea>
      </ul>
      <ListaTareas Tareas={nuevaTarea}></ListaTareas>
      
 
    </div>
  );
}

export default App;
