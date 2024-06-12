import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useConductores } from '../hooks/useConductores';


//* GENERO AQUÍ EL STYLED COMPONENTS, PORQUE NO ME FUNCIONA BIEN EN CSS
const Button = styled.button`
  background-color: grey;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

export const MultasPage = () => {
  //*LLAMAMOS A LOS CONTEXTOS Y LOS 
  const [idMulta, setIdMulta] = useState('');
  const [error, setError] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(''); 
  const { user, logout } = useAuth();
  const conductores = useConductores();

  //**FUNCIÓN QUE LLAMA AL ENDPOINT CON EL ID QUE LE PASAS POR INPUT Y ACTUALIZA
  //* LA MULTA A PAGADA SI
  const handlePagarMulta = async () => {
    try {
      await axios.patch(`http://localhost:8081/api/v1/multas/actualizar-multas/${idMulta}`, {
        Pagada: 'Si'
      });
      //* LANZA AL ALERTA
      window.alert('Multa pagada correctamente');

      //* Y TE REDIRIGE
      window.location.href = '/autorizado/home'; 
    } catch (error) {
      console.error('Error al pagar la multa:', error);
      setError('Error al pagar la multa');
    }
  };
//* lO DE SIEMPRE, EL USEEFFECT PARA ENCONTRAR AL CONDUCTOR Y SACAR SU IMAGEN Y CORREO
  useEffect(() => {
    const encontrarConductor = () => {
      const conductorEncontrado = conductores.find(conductor => conductor.Email === user.correo);
      if (conductorEncontrado) {
        setFotoPerfil(conductorEncontrado.Imagen);
      } else {
        console.log('Conductor no encontrado');
      }
    };

    if (conductores.length > 0) {
      encontrarConductor();
    }
  }, [conductores, user.correo]);

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
      <label>
        ID de la multa:
        <input
          type="text"
          value={idMulta}
          // //*ACTUALIZA EL ESTADO QUE GUARDA EL ID DE LA MULTA, PARA PASÁRSEL OAL ENDPOINT
          onChange={(e) => setIdMulta(e.target.value)}
        />
      </label>
 {/* //* EL RESTO DE INPUTS NO TIENEN VALOR */}
      <br />
      <label>
        Nombre:
        <input type="text" />
      </label>
      <br />
      <label>
        Tarjeta:
        <input type="text" />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" />
      </label>
      <br />
  {/* //* LANZA LA FUNCIÓN QUE LLAMA AL ENDPOINT */}
      <Button onClick={handlePagarMulta}>Pagar multa</Button>
      {error && <p>Error al pagar la multa: {error}</p>}
    </div>
  );
};
