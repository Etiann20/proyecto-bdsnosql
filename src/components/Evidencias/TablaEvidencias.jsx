function TablaEvidencias({

    evidencias,

    onEditar,

    onEliminar

}) {

    if (evidencias.length === 0) {

        return (

            <p>No existen evidencias registradas.</p>

        );

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Archivo</th>

                    <th>Tipo</th>

                    <th>URL</th>

                    <th>Descripción</th>

                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                {

                    evidencias.map((evidencia) => (

                        <tr key={evidencia._id}>

                            <td>

                                {evidencia.nombreArchivo}

                            </td>

                            <td>

                                {evidencia.tipoArchivo}

                            </td>

                            <td>

                                {evidencia.url}

                            </td>

                            <td>

                                {evidencia.descripcion}

                            </td>

                            <td>

                                <button

                                    onClick={() => onEditar(evidencia)}

                                >

                                    ✏ Editar

                                </button>

                                <button

                                    onClick={() => onEliminar(evidencia._id)}

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

export default TablaEvidencias;