
const mongoose = require("mongoose");

const ConductoresSchema = mongoose.Schema;
const bcrypt = require("bcrypt"); //! para las ecnriptaciones de contraseñas, librería de NODE
const validator = require("validator"); //! para poder validar el e-mail y la contraseña, librería de NODE

const SchemaConductores = new ConductoresSchema(
  {
    Nombre: {type: String, required: true, unique:true,},
    Genero: { type: String,
      enum: ["hombre", "mujer", "otro"],
      required: true,
    },
    Imagen: { type: String, required: false },
    Nacimiento: {type: Date},
    Localidad: {type: String},
    Rol: {type: String, 
      enum: ["admin", "user"],
      default: "user",
    },
    Email: {
      type: String,
      required: true,
      trim: true, // quitar espacios
      unique: true,
      validate: [validator.isEmail, "Email no válido"],
    },
    Contrasena: {type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword,"Contraseña no válida. Debe incluir Mínimo 8 Caracteres, Mínimo 1 Mayuscula, Mínimo 1 Minúscula, Mínimo 1 Número, Mínimo 1 Caracter Especial."], // { minCaracteres: 8, minMayusculas: 1, minMinuscula: 1, minNumeros: 1, minCaracteresEspeciales: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    },
    Conductores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Conductores" }],
    Coches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coches" }],
    Multas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Multas" }],
  },
 
  {
    timestamps: true,
  }
);

//! hacemos un preguardado donde se va a encriptar la contraseña. Cada vez que llames a 
//"save" se va a ejecutar esto como previa a la ejecución

SchemaConductores.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next("Error encriptando la contraseña", error);
  }
});

const Conductores = mongoose.model("Conductores", SchemaConductores);

module.exports = Conductores;
