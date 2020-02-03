import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Navbar from "./components/Navbar";
import Registros from "./components/Registros";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h2 className="mt-4 text-center">Lazy Loading Challenge</h2>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-6 col-lg-5 bg-white border border-radius">
            <h3 className="my-4">Registro del participante</h3>
            <Formulario />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-lg-8 bg-white">
            <h4>Registros</h4>
            <Registros />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
