const { upload } = require("../../middleware/file.middleware");

const {
  createMovie,
  toggleCharacters,
  getByNameMovie,
  getAllMovie,
  getByIdMovie, 
  deleteMovie,
} = require("../controllers/Movie.controller");

const MovieRouter = require("express").Router();

MovieRouter.post("/create", createMovie);
MovieRouter.patch("/toggle/:id", toggleCharacters);
MovieRouter.get("/getByName/:name", getByNameMovie);
MovieRouter.get("/getAll/", getAllMovie);
MovieRouter.get("/getById/:id", getByIdMovie);
MovieRouter.delete("/delete/:id", deleteMovie);
module.exports = MovieRouter;
