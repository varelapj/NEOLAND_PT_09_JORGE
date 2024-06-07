//* CREAMOS Y EXPORTAMOS UNA FUNCIÓN QUE NOS SERVIRÁ PARA PINTAR
//* LAS PÁGINAS
export const BasicPage = ({ title, description }) => {
  //* Le pasamos por props el titulo y descripción y luego lo pintamos en 
  //* h1 y p
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )};

//* Lo usamos en todas salvo en login que va con formulario


  