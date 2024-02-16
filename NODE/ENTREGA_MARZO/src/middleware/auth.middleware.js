
const Conductores = require("../api/models/conductores.model");
const { verifyToken } = require("../utils/token");

const dotenv = require("dotenv");
dotenv.config();


const isAuth = async (req, res, next) => {

  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("No autorizado"));
  }
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    
    req.conductores = await Conductores.findById(decoded.id);

    next();
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Problemas con el token", message: error.message });
  }
};

const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
 
  if (!token) {
    return next(new Error("No autorizado"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    req.conductores = await Conductores.findById(decoded.id);

    if (req.conductores.Rol !== "admin") {
      return next(new Error("No autorizado, no eres admin"));
    } else {
      next();
    }

  } catch (error) {
    return res
      .status(409)
      .json({ error: "Problemas con el token", message: error.message });
  }
};

module.exports = { isAuth, isAuthAdmin };
