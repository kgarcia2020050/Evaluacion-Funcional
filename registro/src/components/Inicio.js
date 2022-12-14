import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import React, { useState, useContext } from "react";

import { DataContext } from "../context/Contexto";

const Inicio = () => {
  const { poesias } = useContext(DataContext);
  /*   const [poesias, setPoesias] = useState([]); */
  const [carrera, setCarrera] = useState("");
  const [poesia, setPoesia] = useState();

  /*   useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/verGeneros")
      .then((res) => {
        console.log(valor);
        setPoesias(res.data.Generos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [valor]); */

  return (
    <>
      <Navbar />

      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: "400px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Concurso de declamar poemas</h1>
                <h4 className="mb-3">Inscribete ya</h4>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Generar reportes
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/reportes"}>
                        <button className="dropdown-item">Por edades</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/reporteFechas"}>
                        <button className="dropdown-item">Por fechas</button>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="dropdown-item"
                      >
                        Por g??nero de poes??a.
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        className="dropdown-item"
                      >
                        Por carrera
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Selecciona un tipo de poes??a
              </h5>
            </div>
            <div className="modal-body">
              <select
                name="generoPoesia"
                type="text"
                className="form-control"
                required
                value={poesia}
                onChange={(n) => {
                  setPoesia(n.target.value);
                }}
              >
                <option selected disabled hidden value={""}>
                  Selecciona el genero de poesia
                </option>
                {poesias.map((p) => (
                  <option key={p._id} value={p._id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reportePoesia/${poesia}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Selecciona una carrera
              </h5>
            </div>
            <div className="modal-body">
              <select
                name="carrera"
                value={carrera}
                onChange={(n) => {
                  setCarrera(n.target.value);
                }}
                className="form-control"
                type="text"
                required
                placeholder="Carrera"
              >
                <option value={""} disabled selected hidden>
                  Selecciona tu carrera
                </option>
                <option value={"informatica"}>Inform??tica</option>
                <option value={"electronica"}>Electr??nica</option>
                <option value={"electricidad"}>Electricidad</option>
                <option value={"dibujo"}>Dibujo</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

              <Link to={`/reporteCarreras/${carrera}`}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
