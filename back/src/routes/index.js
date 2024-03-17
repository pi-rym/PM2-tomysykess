/* modulo de rutas entry points
  tengo que definir solicitudes a rutas como direcciones de tipo GET /users*/
/* para que las importe controllers */
const { Router } = require("express");
const indexController = require("../controllers/indexController");

const moviesRouter = require("../routes/moviesRouter");

const router = Router();

router.get(
  "/",
  indexController
); /* ESTO ES DEFINIR EL ENDPOINT. ESTA CALLBACK ES UN CONTROLLER */

router.use("/movies", moviesRouter); /* ruta modularizada */

module.exports = router;
