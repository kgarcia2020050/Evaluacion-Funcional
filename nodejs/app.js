const express = require("express");
const cors = require("cors");
let app = express();

const rutaUsuario = require("./src/routes/usuario.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/prueba", rutaUsuario);

module.exports = app;
