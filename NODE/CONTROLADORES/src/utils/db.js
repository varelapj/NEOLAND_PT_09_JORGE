//!------------ REQUERIMOS DOTENV --------------

const dotenv = require("dotenv");
// usamos dotenv
dotenv.config();
//!------------ REQUERIMOS MONGOOSE --------------

const mongoose = require("mongoose");


//!---------- NOS TRAEMOS MONGO_URI DE .ENV

const MONGO_URI = process.env.MONGO_URI;

//!----------- CREAMOS FUNCIÓN QUE CONECTA CON NUESTRA BASE DE DATOS

const connect = async () => {
  // --------- try : intenta hacer algo ..... y sino lo capturas catch
  try {
    // conectamos con nuestra base de datos

    const db = await mongoose.connect(MONGO_URI);

    // Hacemos destructuring de nombre y host de nuestra base de datos, 
    //^ entrando en la constante db, función .connection
    const { name, host } = db.connection;

    console.log(
      `Conectados a la DB 👌🏾 con el nombre: ${name} en el host: ${host} `
    );
  } catch (error) {
    console.log("Hay en un error en la conexión ❌, ", error);
  }
};

module.exports = { connect };
