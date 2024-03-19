const mongoose = require("mongoose");

const URI =
  "mongodb+srv://tomysykess:C5kKF1nhaQkI3bUD@mycluster.3yvaqdq.mongodb.net/TomasAvilaM02?retryWrites=true&w=majority&appName=myCluster";
/* combiar la parte de uri por mi nombre de database */
const dbConnection = async () => {
  await mongoose.connect(URI);
};

module.exports = dbConnection;
