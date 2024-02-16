//! Importaciones

//^ importamos la libreria que nos genera tokens,or ejemplo, a través del jsonwebtoken.sign
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//** GENERAMOS UN TOKEN */ --> este TOKEN recibe el id y el email del usuario
// Esta función será utilizada en el controller del login 
//^ y cogerá el id y el email del body que le pasemos 
const generateToken = (id, email) => {
  //^ Si no tenemos el id o el email en el body mandamos un error
  if (!id || !email) {
    throw new Error("Falta el email o Id");
  }

  // Si lo recibido es correcto registramos la peticion
  // utilizamos el metodo sign de jwt 
  //^para generar un token único para ese Id y ese email
  // param --> palabra secreta (.env) y la expiracion (caducidad)

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//& ESTE TOKEN LO USAREMOS EN INSOMNIA EN AUTH BEARER TOKEN, 
//& CUANDO HAYA RUTAS AUTENTICADAS


//** VERIFICAMOS EL TOKEN */
// decodificamos -- para saber si es valido y obtener la info con lo que ha sido creado (email, id)

const verifyToken = (token) => {
  // verificamos si traemos el token por param 
  //^ POR EL AUTH BEARER
  //  para lanzar un error si no es asi
  if (!token) {
    throw new Error("Sin token");
  }
//^ SI TENEMOS EL TOKEN, LO VERIFICAMOS CON EL MÉTODO VERIFY DE jsonwebtoken
//^QUE USARÁ EL TOKEN Y LA JXT_SECRET PARA DECODIFICAR Y DEVOLVERNOS EL ID Y EL EMAIL
//^CON EL QUE LO CREAMOS
  return jwt.verify(token, process.env.JWT_SECRET);
};

//! exportamos

module.exports = {
  generateToken,
  verifyToken,
};
