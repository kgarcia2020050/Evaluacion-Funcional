const Poesias = require("../models/poesia.model");



function nuevoGenero(req, res) {
  var datos = req.body;
  if (datos.nombre == "") {
    return res.status(500).send({ Error: "El nombre no puede estar vacio." });
  } else {
    Poesias.create({ nombre: datos.nombre }, (error, nuevoGenero) => {
      if (error)
        return res.status(500).send({ Error: "Error al crear el genero." });
      return res.status(200).send({ Generos: nuevoGenero });
    });
  }
}

function verGeneros(req, res) {
  Poesias.find((error, generos) => {
    if (error)
      return res.status(500).send({ Error: "Error al obtener los generos." });
    return res.status(200).send({ Generos: generos });
  });
}

function crearGeneros(req, res) {
  Poesias.findOne({ nombre: "Lírica" }, (error, generosExistentes) => {
    if (error)
      return res.status(500).send({ Error: "Error al obtener los generos." });
    if (generosExistentes) {
      console.log("Ya existen");
    } else {
      Poesias.create(
        { nombre: "Lírica" },
        { nombre: "Épica" },
        { nombre: "Dramática" },
        (error, generosCreados) => {
          if (error)
            return res
              .status(500)
              .send({ Error: "Error al crear los generos." });
          console.log("Generos creados");
        }
      );
    }
  });
}

module.exports = {
  nuevoGenero,
  verGeneros,
  crearGeneros,
};
