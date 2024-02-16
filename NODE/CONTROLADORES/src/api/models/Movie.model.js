const mongoose = require("mongoose");
//& ok
const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, unique: false },
    year: { type: Number},
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
