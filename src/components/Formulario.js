import React, { Component } from "react";
import ApiService from "../service/ApiService";

class Formulario extends Component {
  state = {
    cedula: "",
    archivo: {}
  };

  handleInputChange = e => {
    this.setState({
      ...this.state.form,
      [e.target.name]: e.target.value
    });
  };

  handleFileChange = e => {
    this.setState({
      ...this.state.form,
      [e.target.name]: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cedula", this.state.cedula);
    formData.append("archivo", this.state.archivo);
    ApiService.upload(formData).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <form className="m-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="cedula">Cédula</label>
          <input
            onChange={this.handleInputChange}
            type="number"
            name="cedula"
            id="cedula"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="archivo">Archivo</label>
          <input
            onChange={this.handleFileChange}
            type="file"
            name="archivo"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button className="col-sm-12 btn btn-primary my-4" type="submit">
          Enviar
        </button>
      </form>
    );
  }
}

export default Formulario;
