const objetoMovies = require("../services/moduleMovies");

const moviesConstroller = (req, res) => {
  res.status(200).json(objetoMovies.returnArrayMovies());
};

module.exports = moviesConstroller;
