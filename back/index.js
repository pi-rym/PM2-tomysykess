/*este index va a ser el entry point de la app */

const app = require("./src/server");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
