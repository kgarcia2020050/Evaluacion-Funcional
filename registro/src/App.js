import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Registro from "./components/Registro";
import Reporte from "./components/Reporte";
import ReportePoesia from "./components/ReportePoesia";
import ReporteCarrera from "./components/ReporteCarrera";
import { MDBFooter } from "mdb-react-ui-kit";
import ReporteFechas from "./components/ReporteFechas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/registro" element={<Registro />} exact />
          <Route path="/reportes" element={<Reporte />} exact />
          <Route
            path="/reportePoesia/:poesia"
            element={<ReportePoesia />}
            exact
          />
          <Route
            path="/reporteCarreras/:carrera"
            element={<ReporteCarrera />}
            exact
          />
          <Route path="/reporteFechas" element={<ReporteFechas />} exact />
        </Routes>
      </BrowserRouter>
      <MDBFooter bgColor="light" className="text-center text-lg-left footer">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Hecho con
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default App;
