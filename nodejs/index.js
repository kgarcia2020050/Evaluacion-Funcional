const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/Registro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3000, function () {
      console.log("Corriendo en el puerto 3000.");
    });
  })
  .catch((error) => console.log(error));
