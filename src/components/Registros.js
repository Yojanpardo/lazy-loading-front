import React, { Component } from "react";
import Registro from "./Registro";

class Registros extends Component {
  state = {
    registros: []
  };

  componentDidMount() {
    this.consultarRegistros();
  }

  componentWillUpdate(){
      this.consultarRegistros();
  }

  consultarRegistros = async () => {
    const url = `http://localhost:8080/api/participante`;
    const response = await fetch(url);
    const registros = await response.json();
    this.setState({
      registros
    });
  };

  render() {
    return (
      <div className="table-responsive-md">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Fecha de registro</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.registros.map(registro => (
              <Registro key={registro.idParticipante} registro={registro} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Registros;
