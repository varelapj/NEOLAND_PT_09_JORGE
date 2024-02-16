//!--------- TRAEMOS MONGOOSE
const mongoose = require("mongoose");

//!--------- CREAMOS UNA VARIABLE QUE EJECUTARÁ ESQUEMAS CON UN 
//& PROCEDIMIENTO ALMACENADO 
const Schema1 = mongoose.Schema;

//!---------> CREAMOS EL MODELO DE DATOS QUE LANZARÁ 
//& LA CONSTANTE DE ARRIBA SCHEMA1
//* Tenemos que poner a cada clave el tipo de dato
//* Definimos otras propiedades que limitan la información que se puede incluir esa clase --->
//* si es obligatoria , longitud maxima, minima.....

const CharacterSchema = new Schema1(
  {
    name: { type: String, required: false, unique: false },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otro"],
      required: false,
    },
    image: { type: String, required: false },
    // Array de object id que hace referencia a mi MODELO movie -->
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  // Para que salga la fecha de creacion
  {
    timestamps: true,
  }
);

//!--- con la definición de datos y su 
//! esquema vamos a definir nuestro MODELO CHARACTER. SIEMPRE ES NOBRE CONSTANTE
//! mongoose.model("NOMBRE",Funcionquecreaelmodelo/esquema)

const Character = mongoose.model("Character", CharacterSchema);

//!------ exportamos el modulo
module.exports = Character;
