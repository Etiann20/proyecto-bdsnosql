import { useState } from "react";

function TablaIncidentes({

    incidentes,

    onEditar,

    onEliminar

}) {

    const [historial, setHistorial] = useState(null);

    if (incidentes.length === 0) {

        return (

            <p>No existen incidentes registrados.</p>

        );

    }

    return (

        <>

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

                                    <div className="acciones-incidente">

                                        <button
                                            onClick={() => onEditar(incidente)}
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() => onEliminar(incidente._id)}
                                        >
                                            Eliminar
                                        </button>

                                        <button
                                            onClick={() => setHistorial(incidente)}
                                        >
                                            Historial
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

            {

                historial && (

                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,.45)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9999
                        }}
                    >

                        <div
                            style={{
                                background: "#1f2937",
                                color: "#fff",
                                width: "650px",
                                maxHeight: "80vh",
                                overflowY: "auto",
                                borderRadius: "10px",
                                padding: "25px"
                            }}
                        >

                            <h2>

                                📜 Historial del Incidente

                            </h2>

                            <hr />

                            {

                                historial.bitacoras.length === 0

                                    ? (

                                        <p>

                                            No existen registros.

                                        </p>

                                    )

                                    : (

                                        historial.bitacoras.map((evento, index) => (

                                            <div
                                                key={index}
                                                style={{
                                                    borderLeft: "3px solid #3b82f6",
                                                    paddingLeft: "15px",
                                                    marginBottom: "18px"
                                                }}
                                            >

                                                <strong>

                                                    {new Date(evento.fecha).toLocaleString("es-CL")}

                                                </strong>

                                                <br />

                                                👤 {evento.usuario}

                                                <br />

                                                {evento.accion}

                                            </div>

                                        ))

                                    )

                            }

                            <button

                                className="btn-guardar"

                                onClick={() => setHistorial(null)}

                            >

                                Cerrar

                            </button>

                        </div>

                    </div>

                )

            }

        </>

    );

}

export default TablaIncidentes;