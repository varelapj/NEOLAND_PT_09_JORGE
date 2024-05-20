import "./listatareas.css"
import Tarea from "../eliminartarea/eliminartarea";



export const ListaTareas = (props) => {
  const {Tareas}= props;
      return (
        <h2>
        {Tareas}
      
        </h2>
        
      );
    };
    