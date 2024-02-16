//! importaciones y configurar dotenv

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//! Traemos y ejecutamos la conexión a la base de datos

const { connect } = require("./src/utils/db");
connect();

//! Configuramos cloudinary

const { configCloudinary } = require("./src/middleware/file.middleware");
configCloudinary();

//! Creamos el servidor

const app = express();

//! Damos las cors al servidor
const cors = require("cors");
app.use(cors());

//! Limitaciones a los archivos de nuesstro proyecto
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! ------------------- Rutas ---------------------
//Generamos la url y le decimos que ejecute la acción que establecimos
// en el archivo character.routes.js const CharacterRouter = express.Router();
// en el fichero de rutas le hemos puesto las termianciones. Estas riutas de por si no 
//llevan a ningún sitio. Además van precedidas del local  host http://localhost:8081/
const CharacterRouter = require("./src/api/routes/Character.routes");
app.use("/api/v1/character", CharacterRouter);

const MovieRouter = require("./src/api/routes/Movie.routes");
app.use("/api/v1/movie", MovieRouter);

//! Generamos error cuando no se encuentre la ruta
app.use("*", (req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  return next(error);
});

//! Cogemos el error cuando crashea el servidor
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

app.disable("x-powered-by");

//! Escuchamos en el puerto del servidor web

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
