function TablaUsuarios({
    usuarios,
    onEliminar,
    onEditar
}) {

    if (usuarios.length === 0) {

        return (

            <p>No existen usuarios registrados.</p>

        );

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Nombre</th>

                    <th>Correo</th>

                    <th>Rol</th>

                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {usuarios.map((usuario) => (

                    <tr key={usuario._id}>

                        <td>{usuario.nombre}</td>

                        <td>{usuario.correo}</td>

                        <td>{usuario.rol}</td>

                        <td>

                        <button
                            onClick={() => onEditar(usuario)}
                        >
                            Editar
                        </button>

                            <button
                                onClick={() => onEliminar(usuario._id)}
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

export default TablaUsuarios;