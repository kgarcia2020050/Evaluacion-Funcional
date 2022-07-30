import React from "react";
import Navbar from "./Navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ReporteFechas = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/edades")
      .then((res) => {
        setUsuarios(res.data.UsuariosEdad);
        if (res.data.UsuariosEdad.length === 0) {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "No hay usuarios con la información que buscas.",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-danger">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Género de poesía</th>
            <th scope="col">Fecha de registro</th>
            <th scope="col">Fecha de declamación</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table-primary">
                <td>{users.carnet}</td>
                <th scope="row">{users.nombre}</th>
                <td>{users.carrera}</td>
                <td>{users.generoPoesia}</td>
                <td>{users.inscripcion}</td>
                <td>{users.fechaDeclamar}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default ReporteFechas;
