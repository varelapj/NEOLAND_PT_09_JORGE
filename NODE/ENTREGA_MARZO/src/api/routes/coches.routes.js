const {
  createCoches,
  getAllCoches,
  getByIdCoches,
  getByMatriculaCoches,
  getByAnoCoches,
  deleteCoches,
  toggleMultas
} = require("../controllers/coches.controller");

const { upload } = require("../../middleware/files.middleware");
const express = require("express");


const CochesRouter = express.Router();


CochesRouter.post("/crear-coches",upload.single("Imagen"), createCoches);
CochesRouter.get("/todos-coches", getAllCoches);
CochesRouter.get("/id-coches/:id", getByIdCoches);
CochesRouter.get("/matricula-coches/:Matricula", getByMatriculaCoches);
CochesRouter.get("/ano-coches/:Ano", getByAnoCoches);
CochesRouter.delete("/borrar-coches/:id", deleteCoches);
CochesRouter.patch("/toggle-coches/:id", toggleMultas);



module.exports = CochesRouter;







