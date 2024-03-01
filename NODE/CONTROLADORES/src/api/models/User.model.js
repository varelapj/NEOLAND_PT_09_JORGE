//! ----------- traemos mongoose
const mongoose = require("mongoose");

//! ----------- importamos diferentes librerías
//^ para las ecnriptaciones de contraseñas, librería de NODE
const bcrypt = require("bcrypt"); // ---- sirve para encriptar  
//^ para poder validar el e-mail y la contraseña, librería de NODE

const validator = require("validator"); // ----- nos valida info

//! ----------- schema datos

//& OK

const UserSchema = new mongoose.Schema(
  {
    email: { 
      type: String,
      required: true,
      trim: true, // quitar espacios
      unique: true,
      //^  DE LA LIBRERIA VALIATOR INSTALADA
      validate: [validator.isEmail, "Email no válido"],
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      //^  DE LA LIBRERIA VALIATOR INSTALADA 
      validate: [validator.isStrongPassword], // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otro"],
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
    confirmationCode: {
      type: Number,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },

    // Id de movies que el user ha dado ha me gusta
    moviesFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],

    // Id de characters que el user ha dado ha me gusta
    charactersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],

    // Id de los users que siguen al user
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    // Id de sers seguidos por el user
    followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    // Los comentarios que otro user ha realizado a este user
    commentsByOther: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

    // Comentarios que el user realiza
    postedComments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

//! hacemos un preguardado donde se va a encriptar la contraseña. Cada vez que llames a 
//^ "save" se va a ejecutar esto como previa a la ejecución

//^ USAMOS BCRYPT PARA EL ENCRIPTADO
UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next("Error encriptando la contraseña", error);
  }
});

// ! ---------- creamos el modelo en base al Schema

const User = mongoose.model("User", UserSchema);

//! ----------- expotamos para poder usarlo

module.exports = User;
