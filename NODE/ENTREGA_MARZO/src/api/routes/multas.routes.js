const {
createMultas,
getAllMultas,
getByIdMultas,
getByPagadaMultas,
updateMultas,
toggleCoches} = require("../controllers/multas.controller");

const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const express = require("express");


const MultasRouter = express.Router();


MultasRouter.post("/crear-multas", createMultas);
MultasRouter.get("/todas-multas", getAllMultas);
MultasRouter.get("/id-multas/:id", getByIdMultas);
MultasRouter.get("/pagada-multas/:Pagada", getByPagadaMultas);
MultasRouter.patch("/actualizar-multas/:id", updateMultas);
MultasRouter.patch("/toggle-multas/:id", toggleCoches);

module.exports = MultasRouter;







