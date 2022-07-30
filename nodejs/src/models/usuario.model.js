const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Usuarios = Schema({
  nombre: String,
  direccion: String,
  genero: String,
  telefono: String,
  nacimiento: Date,
  carrera: String,
  tipoCarrera: String,
  edad: Number,
  generoPoesia: String,
  tipoPoesia: String,
  inscripcion: String,
  fechaDeclamar: String,
  carnet: String,
});

module.exports = mongoose.model("Usuarios", Usuarios);
