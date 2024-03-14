const { Router } = require("express");
const direcMovies = require("../controllers/movies");

const movies = Router();
movies.get("/", direcMovies);

module.exports = movies;
