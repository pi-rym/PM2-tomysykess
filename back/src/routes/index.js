/* modulo de rutas entry points
  tengo que definir solicitudes a rutas como direcciones de tipo GET /users*/
/* para que las importe controllers */
const { Router } = require("express");
const testController = require("../controllers/index");
const moviesController = require("../controllers/movies");
const router = Router();
router.get(
  "/",
  testController
); /* ESTO ES DEFINIR EL ENDPOINT. ESTA CALLBACK ES UN CONTROLLER */
router.use("/movies", moviesController);

module.exports = router;
