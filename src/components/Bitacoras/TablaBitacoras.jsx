function TablaBitacoras({ bitacoras }) {

    if (bitacoras.length === 0) {

        return (

            <p>No existen registros en la bitácora.</p>

        );

    }

    return (

        <table className="tabla-usuarios">

            <thead>

                <tr>

                    <th>Fecha</th>

                    <th>Usuario</th>

                    <th>Acción</th>

                    <th>Descripción</th>

                </tr>

            </thead>

            <tbody>

                {bitacoras.map((bitacora) => (

                    <tr key={bitacora._id}>

                        <td>

                            {

                                new Date(bitacora.createdAt)
                                    .toLocaleString("es-CL", {

                                        day: "2-digit",

                                        month: "2-digit",

                                        year: "numeric",

                                        hour: "2-digit",

                                        minute: "2-digit"

                                    })

                            }

                        </td>

                        <td>

                            {

                                bitacora.usuario?.nombre ||

                                "Sin usuario"

                            }

                        </td>

                        <td>

                            {bitacora.accion}

                        </td>

                        <td>

                            {bitacora.descripcion}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default TablaBitacoras;