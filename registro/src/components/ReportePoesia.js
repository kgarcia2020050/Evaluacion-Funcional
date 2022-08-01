import React from "react";
import Navbar from "./Navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ReportePoesia = () => {
  const [usuarios, setUsuarios] = useState([]);
  const valores = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/prueba/poesia/" + valores.poesia)
      .then((res) => {
        setUsuarios(res.data.UsuariosPoesia);
        console.log(valores.poesia)
        if(res.data.UsuariosPoesia.length === 0){
          Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'No hay usuarios con la información que buscas.',
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [valores.poesia]);

  return (
    <>
    <Navbar/>
      <br />
      <MDBTable className="tabla">
        <MDBTableHead>
          <tr className="table-danger">
            <th scope="col">Carnet</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de registro</th>
          </tr>
        </MDBTableHead>
        {usuarios.map((users) => {
          return (
            <MDBTableBody key={users._id}>
              <tr className="table-primary">
                <td>{users.carnet}</td>
                <th scope="row">{users.nombre}</th>
                <td>{users.carrera}</td>
                <td>{users.edad} años</td>
                <td>{users.inscripcion}</td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
};

export default ReportePoesia;
