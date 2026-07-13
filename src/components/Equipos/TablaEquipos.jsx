function TablaEquipos({

    equipos,

    onEditar,

    onEliminar

}) {

    if (equipos.length === 0) {

        return <p>No existen equipos registrados.</p>;

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Ubicación</th>
                    <th>IP</th>
                    <th>Sistema Operativo</th>
                    <th>Estado</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {equipos.map((equipo) => (

                    <tr key={equipo._id}>

                        <td>{equipo.nombre}</td>
                        <td>{equipo.tipo}</td>
                        <td>{equipo.ubicacion}</td>
                        <td>{equipo.direccionIP}</td>
                        <td>{equipo.sistemaOperativo}</td>
                        <td>{equipo.estado}</td>

                        <td>

                            <button
                                onClick={() => onEditar(equipo)}
                            >
                                Editar
                            </button>

                            <button
                                onClick={() => onEliminar(equipo._id)}
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

export default TablaEquipos;