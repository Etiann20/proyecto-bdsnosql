import { useEffect, useState } from "react";

function FormularioEvidencia({

    onGuardar,

    evidenciaEditando

}) {

    const [formulario, setFormulario] = useState({

        nombreArchivo: "",

        tipoArchivo: "",

        url: "",

        descripcion: ""

    });

    const [error, setError] = useState("");

    useEffect(() => {

        if (evidenciaEditando) {

            setFormulario({

                _id: evidenciaEditando._id,

                nombreArchivo: evidenciaEditando.nombreArchivo,

                tipoArchivo: evidenciaEditando.tipoArchivo,

                url: evidenciaEditando.url,

                descripcion: evidenciaEditando.descripcion

            });

        } else {

            setFormulario({

                nombreArchivo: "",

                tipoArchivo: "",

                url: "",

                descripcion: ""

            });

        }

        setError("");

    }, [evidenciaEditando]);

    const handleChange = (e) => {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const resultado = await onGuardar(formulario);

        if (!resultado.ok) {

            setError(resultado.mensaje);

            return;

        }

        setFormulario({

            nombreArchivo: "",

            tipoArchivo: "",

            url: "",

            descripcion: ""

        });

    };

    return (

        <form
            className="formulario-usuario"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>Nombre del archivo</label>

                <input
                    type="text"
                    name="nombreArchivo"
                    value={formulario.nombreArchivo}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Tipo de archivo</label>

                <input
                    type="text"
                    name="tipoArchivo"
                    value={formulario.tipoArchivo}
                    onChange={handleChange}
                    placeholder="PDF, PNG, JPG..."
                    required
                />

            </div>

            <div className="form-group">

                <label>URL del archivo</label>

                <input
                    type="text"
                    name="url"
                    value={formulario.url}
                    onChange={handleChange}
                    placeholder="https://..."
                    required
                />

            </div>

            <div className="form-group">

                <label>Descripción</label>

                <input
                    type="text"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={handleChange}
                    required
                />

            </div>

            {

                error &&

                <p className="form-error">

                    ❌ {error}

                </p>

            }

            <button
                className="btn-guardar"
                type="submit"
            >

                {

                    evidenciaEditando

                        ? "Actualizar Evidencia"

                        : "Guardar Evidencia"

                }

            </button>

        </form>

    );

}

export default FormularioEvidencia;