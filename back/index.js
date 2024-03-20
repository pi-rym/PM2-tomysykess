/*este index va a ser el entry point de la app */
require("dotenv").config();
const app = require("./src/server");
const dbConnection = require("../back/src/config/dbConnection");

const { PORT } = process.env;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("tenemos problemas con la conexion db");
  });
