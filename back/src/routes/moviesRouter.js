const { Router } = require("express");
const moviesConstroller = require("../controllers/moviesController");

const moviesRouter = Router();
moviesRouter.get("/", moviesConstroller);

module.exports = moviesRouter;
