/*este index va a ser el entry point de la app */

const app = require("./src/server");
const dbConnection = require("../back/src/config/dbConnection");

dbConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  })
  .catch((err) => {
    console.log("tenemos problemas con la conexion db");
  });
