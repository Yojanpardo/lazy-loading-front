import React from "react";

const Registro = ({registro}) => {
    const url = `http://localhost:8080/api/participante/descargar/${registro.idParticipante}`
    return(
        <tr>
            <td>{registro.cedulaParticipante}</td>
            <td>{registro.fechaRegistro}</td>
            <td><a href={url} about="_blank" className="btn btn-primary">Descargar</a></td>
        </tr>
    )
}

export default Registro;