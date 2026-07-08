import { useEffect, useState } from "react";

function FormularioTecnico({

    onGuardar,

    tecnicoEditando

}) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        especialidad: "",
        telefono: "",
        estado: "Disponible"
    });

    useEffect(() => {

        if (tecnicoEditando) {

            setFormulario({

                _id: tecnicoEditando._id,

                nombre: tecnicoEditando.nombre,

                correo: tecnicoEditando.correo,

                especialidad: tecnicoEditando.especialidad,

                telefono: tecnicoEditando.telefono,

                estado: tecnicoEditando.estado

            });

        } else {

            setFormulario({

                nombre: "",

                correo: "",

                especialidad: "",

                telefono: "",

                estado: "Disponible"

            });

        }

    }, [tecnicoEditando]);

    const handleChange = (e) => {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onGuardar(formulario);

        setFormulario({

            nombre: "",

            correo: "",

            especialidad: "",

            telefono: "",

            estado: "Disponible"

        });

    };

    return (

        <form
            className="formulario-usuario"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>Nombre</label>

                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Correo</label>

                <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Especialidad</label>

                <input
                    type="text"
                    name="especialidad"
                    value={formulario.especialidad}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Teléfono</label>

                <input
                    type="text"
                    name="telefono"
                    value={formulario.telefono}
                    onChange={handleChange}
                />

            </div>

            <div className="form-group">

                <label>Estado</label>

                <select
                    name="estado"
                    value={formulario.estado}
                    onChange={handleChange}
                >

                    <option value="Disponible">Disponible</option>

                    <option value="Ocupado">Ocupado</option>

                    <option value="Ausente">Ausente</option>

                </select>

            </div>

            <button
                className="btn-guardar"
                type="submit"
            >

                {

                    tecnicoEditando

                        ? "Actualizar Técnico"

                        : "Guardar Técnico"

                }

            </button>

        </form>

    );

}

export default FormularioTecnico;