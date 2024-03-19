const getMovies = require("../services/moduleMovies");

const moviesConstroller = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

module.exports = moviesConstroller;
