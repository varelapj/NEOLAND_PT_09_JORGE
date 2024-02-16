/** es unb middleware como el de subida de ficheros pero con la diferencia que este lo que hace
 * es comprobar que la persona que entra a las rutas autenticadas este autorizado para hacerlo
 * El metodo que utiliza para ello es un Token que lo genera la libreria JSON web token
 */

//! Importaciones

//Nos traemos el modelo de User para buscar al usuario que hace la solicitud mediante el id que trae el token --> decodificacion

const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");

const dotenv = require("dotenv");
dotenv.config();

//! ---------- esta funcion es para ver si estas autenticado (TOKEN VALIDO) ->
//!  independientemente del rol de ese user
//& ESTA FUNCIÓN VA A IR ANTES DEL CONTROLADOR, EN EL ROUTER

const isAuth = async (req, res, next) => {
  //** tenemos que quedarnos con el token que viene en el encabezado de la solicitud */
  //** hay que quitar la palabra BEARER que viene donde el token */
  //^ PORQUE EN INSOMNIA LE PONEMOS EL TOKEN POR AUTH BEARER
  // reemplazamos bearer y ponemos un string vacio ""
  //^LOS HEADERS ES COMO EL .BODY, UNA PARTE DE LA PETICIÓN, USAMOS EL AUTHORIZATION
  //^ PORQUE EL TOKEN VENDRÁ A TRAVÉS DE AUTH BEARER
  //^ LE EMETEMOS OPTIONAL CHANGING POR SI N OVIENE
  const token = req.headers.authorization?.replace("Bearer ", "");

  //** comprobamos si hay token y si no lanzamos un error */
  if (!token) {
    return next(new Error("No autorizado"));
  }

  try {
    //** SI hay token le pedimos que nos de la info con la que se creo (id, email) */
    //** Hay que decodificarlo usando la libreria  */
    //^ SI TENEMOS EL TOKEN, LO VERIFICAMOS CON EL MÉTODO VERIFY DE jsonwebtoken 
    //^A TRAVÉS DE LA FUNCIÓN verifytoken DE token.js
//^QUE USARÁ EL TOKEN Y LA JXT_SECRET PARA DECODIFICAR Y DEVOLVERNOS EL ID Y EL EMAIL
//^CON EL QUE LO CREAMOS
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    console.log("decoded", decoded);

    //** CREAMOS EL REQ.USER con todos los datos del usuario */
    //** */ --> en la solicitud tenemos los datos del user

    req.user = await User.findById(decoded.id);

    // Como no hemos puesto return le decimos que continue
    next();
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Problemas con el token", message: error.message });
  }
};

//! ------- vamos a crear otra autorización solo para los admin, sino eres admin no tienes permiso

const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  //** comprobamos si hay token y sino lanzamos un error */
  if (!token) {
    return next(new Error("No autorizado"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    console.log("decoded", decoded);

    //** CREAMOS EL REQ.USER con todos los datos del usuario */ --> en la solicitud tenemos los datos del user

    req.user = await User.findById(decoded.id);

    // Comprobamos que el rol sea de admin
    if (req.user.rol !== "admin") {
      return next(new Error("No autorizado, no eres admin"));
    } else {
      next();
    }

    // next() --> se puede poner fuera del else

    // Si eres admin continuamos
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Problemas con el token", message: error.message });
  }
};

module.exports = { isAuth, isAuthAdmin };
