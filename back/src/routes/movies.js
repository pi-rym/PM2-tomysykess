const { Router } = require("express");
const direcMovies = require("../controllers/movies");

const movies = Router();
movies.get("/movies", direcMovies);

module.exports = movies;
