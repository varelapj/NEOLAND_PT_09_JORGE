const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//? -------------------------------------------------------
//!--------------------- POST - CREATE --------------------
//? -------------------------------------------------------

const createMovie = async (req, res, next) => {
  console.log(req.body);
  try {
    await Movie.syncIndexes();

    // Creamos nueva instancia de Movie
    const newMovie = new Movie(req.body);

    // Guardamos ese registro en la db
    const saveMovie = await newMovie.save();

    // Si existe es que ha guardado de forma correcta --> 200
    if (saveMovie) {
      return res.status(200).json(saveMovie);
    } else {
      // Sino existe es que no se ha guardado --> 409
      return res.status(409).json("No se ha podido crear la Movie");
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error en la creación de nueva Movie",
      message: error.message,
    });
  }
};

//? -------------------------------------------------------
//!--------------------- PATCH - TOGGLE --------------------
//? -------------------------------------------------------

const toggleCharacters = async (req, res, next) => {
  try {
    // cogemos el id de los params
    const { id } = req.params;

    // Recogemos los characters del body
    const { characters } = req.body; // --> esto devuelve un array de id ["12343432", "72369469367"]
    console.log("characters", characters);
S
    // Buscamos la pelicula a actualizar por el id

    const movieById = await Movie.findById(id);

    // Comprobamos si esta movie existe en la db y sino lanzamos un 404
    if (movieById) {
      // Cogemos lo traido por req.body y lo convertimos en array .split(",") --> js
      // Separando las posiciones del string

      // Separamos por comas y convertimos en array
      const arrayCharacters = characters.split(",");

      console.log("array characters", arrayCharacters);

      // Recorremos el array de characters que son Id para comprobar si estan en la movie (sacarlos) o sino estan (meterlos)

      // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
      Promise.all(
        arrayCharacters.map(async (character) => {
          console.log("character", character);
          if (movieById.characters.includes(character)) {
            // Si lo incluye hay que quitarlo ( character al array de characters de movie)
            //** LO QUITAMOS PORQUE LO INCLUYE */
            try {
              // buscamos la movie que queremos actualizar
              await Movie.findByIdAndUpdate(id, {
                // quitamos el character del array de characters
                $pull: { characters: character },
              });

              try {
                // Buscamos el character y le quitamos la pelicula
                await Character.findByIdAndUpdate(character, {
                  $pull: { movies: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, quitarle la movie",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar la movie, quitarle el character",
                message: error.message,
              });
            }
          } else {
            // Sino lo incluye lo añadimos ( character al array de characters de movie)
            //** LO AÑADIMOS */
            try {
              // actualizamos la movie añadiendole el character
              await Movie.findByIdAndUpdate(id, {
                $push: { characters: character },
              });

              try {
                // Actualizamos nuestro character metiendo en el campo de movies la movie

                await Character.findByIdAndUpdate(character, {
                  $push: { movies: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, añadirle la movie",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar la movie, al añadirle el character",
                message: error.message,
              });
            }
          }
        })
      ).then(async () => {
        return res
          .status(200)
          .json(await Movie.findById(id).populate("characters"));
      });
    } else {
      // Lanzamos un 404 porque no existe la pelicula a actualizar
      return res.status(404).json("Movie no encontrada, prueba con otro id");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al actualizar la movie", message: error.message });
  }
};




//? -------------------------------------------------------
//!--------------------- GET - GET ALL --------------------
//? -------------------------------------------------------

const getAllMovie = async (req, res, next) => {
  try {
    // Traemos todos los elementos de la coleccion
    const allMovie = await Movie.find();
    // Find nos devuelve un array con todos los elementos coincidentes

    if (allMovie.length > 0) {
      // Si hay registros lanzamos una respuesta correcta
      return res.status(200).json(allMovie);
    } else {
      // si no hay registros lanzamos una respuesta 404
      return res.status(404).json("No se han encontrado películas");
    }
  } catch (error) {
    // capturtamos el error
    return res
      .status(409)
      .json({ error: "Error al buscar películas", message: error.message });
  }
};

//? -------------------------------------------------------
//!--------------------- GET - GET By ID --------------------
//? -------------------------------------------------------

const getByIdMovie = async (req, res, next) => {
  try {
    // Hacemos destructuring del id traido por params
    const { id } = req.params;

    // Encontramos al character que tenga ese ID
    //! POPULATE Nos permite obtener los datos de los campos populados
    const MovieById = await Movie.findById(id);

    // Comprobamos si se ha encontrado el character
    if (MovieById) {
      return res.status(200).json(MovieById);
    } else {
      return res.status(404).json("No se ha encontrado la movie");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al buscar por Id", message: error.message });
  }
};

//? -------------------------------------------------------
//!--------------------- GET - GET By NAME --------------------
//? -------------------------------------------------------

const getByNameMovie = async (req, res, next) => {
  console.log(req);
  try {
    // Hacemos destructuring del name traido por params
    const { name } = req.params;

    // Buscamos al character que coincida en el name
    const MoviesByName = await Movie.find({ name });
    console.log(MoviesByName);

    // Si la longitud del array es mayor a 0 hay character con ese name y la respuesta es 200
    if (MoviesByName.length > 0) {
      return res.status(200).json(MoviesByName);
    } else {
      return res.status(404).json("No se han encontrado registros");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "error durante la búsqueda", message: error.message });
  }
};



//? -------------------------------------------------------
//!--------------------- DELETE --------------------
//? -------------------------------------------------------

// Borramos el character cuyo ID traemos por params --> //! INCONISTENCIA --> borrar el registro de este id en los campos donde aparece
//! en este caso aparece en ele array de characters en movie

const deleteMovie = async (req, res, next) => {
  
  try {
    // cogemos el id de los params
    const { id } = req.params;

    // buscamos y borramos el Movie
    const Movie = await Movie.findByIdAndDelete(id);

    if (Movie) {
      // Si existe el Movie --> borramos los registros donde aparece
      //! comprobamos si ese Movie ha sido borrado
      const MovieDelete = await Movie.findById(id);

      //! --> borramos los registros de Movie en los arrys de movie donde aparece

      try {
        // UpdateMany --> actualiza todos los registros que contengan en Movie el id
        // 1º parametro es el filtro
        // 2º acción --> sacar de Movies el id de ese Movie borrado
        await Movie.updateMany(
          { Movies: id },
          { $pull: { Movies: id } }
        );

        // verificamos que el Movie borrado no tengo la imagen por defecto para borrarla
        Movie.image !==
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
          deleteImgCloudinary(Movie.image);

        // Lanzamos una respuesta dependiendo de si se ha encontrado el Movie borrado
        return res.status(MovieDelete ? 409 : 200).json({
          deleteTest: MovieDelete ? false : true,
        });
      } catch (error) {
        return res.status(409).json({
          error: "Error al borrar el Movie",
          message: error.message,
        });
      }
    } else {
      // lanzamos una respuesta 404 que el Movie no ha sido encontrado
      return res.status(404).json("El Movie no ha sido encontrado");
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error al borrar el Movie",
      message: error.message,
    });
  }
};
module.exports = { createMovie, toggleCharacters, getByNameMovie, getAllMovie, getByIdMovie, deleteMovie };