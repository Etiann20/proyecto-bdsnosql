function TablaIncidentes({

    incidentes,

    onEditar,

    onEliminar

}) {

    if (incidentes.length === 0) {

        return (

            <p>No existen incidentes registrados.</p>

        );

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Título</th>

                    <th>Prioridad</th>

                    <th>Estado</th>

                    <th>Usuario</th>

                    <th>Técnico</th>

                    <th>Equipo</th>

                    <th>Evidencias</th>

                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {

                    incidentes.map((incidente) => (

                        <tr key={incidente._id}>

                            <td>{incidente.titulo}</td>

                            <td>{incidente.prioridad}</td>

                            <td>{incidente.estado}</td>

                            <td>{incidente.usuario?.nombre}</td>

                            <td>{incidente.tecnico?.nombre || "-"}</td>

                            <td>{incidente.equipo?.nombre}</td>

                            <td>

                                {

                                    incidente.evidencias && incidente.evidencias.length > 0

                                        ? incidente.evidencias.map((evidencia) => (

                                            <div key={evidencia._id}>

                                                {evidencia.nombreArchivo}

                                            </div>

                                        ))

                                        : "-"

                                }

                            </td>

                            <td>

                                <button
                                    onClick={() => onEditar(incidente)}
                                >
                                    ✏ Editar
                                </button>

                                <button
                                    onClick={() => onEliminar(incidente._id)}
                                >
                                    🗑 Eliminar
                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default TablaIncidentes;