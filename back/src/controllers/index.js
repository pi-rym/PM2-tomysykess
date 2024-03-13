/* en este modulo van a estar las funciones que establecen la logica de negocio de cada una de las rutas */
/* controlador=define qué se va a hacer con la ruto importada */

/* para esa ruta GET /users => vamos a ir a la base de datos a pedir la informacion de los usuarios 
y responder al cliente con la informacion obtenida */

const testConstroller = (req, res) => {
  res.status(200).send("Hola, tu naríz contra mis bolas");
};

module.exports = testConstroller;
