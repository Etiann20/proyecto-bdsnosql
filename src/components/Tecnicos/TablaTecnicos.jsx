function TablaTecnicos({

    tecnicos,

    onEliminar,

    onEditar

}) {

    if (tecnicos.length === 0) {

        return (

            <p>No existen técnicos registrados.</p>

        );

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Nombre</th>

                    <th>Correo</th>

                    <th>Especialidad</th>

                    <th>Teléfono</th>

                    <th>Estado</th>

                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {tecnicos.map((tecnico) => (

                    <tr key={tecnico._id}>

                        <td>{tecnico.nombre}</td>

                        <td>{tecnico.correo}</td>

                        <td>{tecnico.especialidad}</td>

                        <td>{tecnico.telefono}</td>

                        <td>{tecnico.estado}</td>

                        <td>

                            <button
                                onClick={() => onEditar(tecnico)}
                            >
                                Editar
                            </button>

                            <button
                                onClick={() => onEliminar(tecnico._id)}
                            >
                                Eliminar
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default TablaTecnicos;