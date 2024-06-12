import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useConductores } from '../hooks/useConductores';
import { useCoches } from '../hooks/useCoches';

export const CochesPage = () => {
  //*Destructuramos los contextos y generamos los estados,
  const { user, logout } = useAuth();
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [inputs, setInputs] = useState({
   //* con los datos imputs que necesitaremos poblar con un usestate
    Matricula: '',
    Modelo: '',
    Ano: '',
    Permiso_Ambiental: '',
    Color: '',
    Imagen: '',
    Multas: [],
    Conductores: ''
  });

  //*llamamos al context de conductores PARA PODER BUSCAR SU ID Y AÑADIRLE EL COCHE
  const conductores = useConductores(); 
  const coches = useCoches(); // Usar el contexto de coches (aunque no se usa en este componente)

//* usamos useeffect parra buscar el coductor que tenga asociado el correo en el localstorage
  useEffect(() => {
    const encontrarConductor = () => {
      const conductorEncontrado = conductores.find(conductor => conductor.Email === user.correo);
      //* si hay, que siempre habrá
      if (conductorEncontrado) {
        setInputs(prevState => ({
          //* traemos el id y se lo ponemos al input conductor, así se añade el coche al conductor
          ...prevState,
          Conductores: conductorEncontrado._id
        }));
        //* y la imagen que usamos en el header
        setFotoPerfil(conductorEncontrado.Imagen);
      } else {
        console.log('Conductor no encontrado');
      }
    };
//* Y SI HAY CONDUCTOR, PUES SE LLAMA A LA FUNCIÓN
    if (conductores.length > 0) {
      encontrarConductor();
    }
    //* esto cambiara cuando cambiemos el correo en el localstorage
  }, [conductores, user.correo]);

  //* cuando cambia el input, nos vamso al usestate de los inputs a coger l oque teníamos ... y añadir
  //* esto l oañadimos en el manejo del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
//* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SI NO LO QUE LE PIDA 
//* que en este caso es ir con axios al endpoint de crear coches pasándole
//* los datos de los  inputs, para que lo crree
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/coches/crear-coches', inputs);
      console.log('Coche registrado:', response.data);
//* después que salga un alert de coche añadido
      window.alert('Coche añadido correctamente');
      //* y que nos lelve a a home de vuelta
      window.location.href = '/autorizado/home';
    } catch (error) {
      console.error('Error al registrar coche:', error);
    }
  };

  return (
    //* PINTAMOS EL HEADER
    <div>
      <header className="header">
        <div className="left-section">
          {/* //* CON UN LOGO QUE NOS LLEVA A HOME */}
          <Link to="/autorizado/home">
            <img 
              src="https://res.cloudinary.com/dx8p4o1ak/image/upload/v1718014262/ENTREGA_MARZO/Captura_de_pantalla_2024-06-07_201352_u5tiog.png" 
              alt="Captura de pantalla"
              className="logo"
            />
          </Link>
          <p className="logo-text">mitráfico</p>
        </div>
        <div className="right-section">
          {/* //* CON UN LOGO QUE NOS LLEVA A PERFIL */}
          <Link to="/autorizado/profile">
            <img 
              src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
              alt="perfil"
              className="fotoperfil"
            />
            <br />
            {/* //* CON UN BOTÓN DE LOGOUT QUE VIENE DEL CONTEXTO USEAUTH*/}
            <button id="botonlogout" key={"logout"} onClick={logout}>
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </header>
      {/* //* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SI NO LO QUE LE PIDA */}
      <form onSubmit={handleSubmit}>
    {/* //* VAMOS PINTANDO EL INPUT DE DATOS DEL COCHE 
    //* QUE CUANDO CAMBIE SE UNE AL HANDLECHANGE DE ARRIBA Y SE UNE A LOS CAMPOS QUE CREAMOS
    //* ARRIBA EN EL USESTATE*/}
        <label>Matricula:</label>
        <input type="text" name="Matricula" value={inputs.Matricula} onChange={handleChange} required />
        <br />
        <label>Modelo:</label>
        <input type="text" name="Modelo" value={inputs.Modelo} onChange={handleChange} required />
        <br />
        <label>Año:</label>
        <input type="number" name="Ano" value={inputs.Ano} onChange={handleChange} required />
        <br />
        <label>Permiso Ambiental:</label>
        <input type="text" name="Permiso_Ambiental" value={inputs.Permiso_Ambiental} onChange={handleChange} required />
        <br />
        <label>Color:</label>
        <input type="text" name="Color" value={inputs.Color} onChange={handleChange} required />
        <br />
        <label>URL de la Imagen:</label>
        <input type="url" name="Imagen" value={inputs.Imagen} onChange={handleChange} required />
        <br />
        <button type="submit">Registrar Coche</button>
      </form>
    </div>
  );
};
