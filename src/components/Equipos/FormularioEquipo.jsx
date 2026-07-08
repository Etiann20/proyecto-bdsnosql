import { useEffect, useState } from "react";

function FormularioEquipo({

    onGuardar,

    equipoEditando

}) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        tipo: "Servidor",
        ubicacion: "",
        direccionIP: "",
        sistemaOperativo: "",
        estado: "Operativo"
    });

    useEffect(() => {

        if (equipoEditando) {

            setFormulario({

                _id: equipoEditando._id,

                nombre: equipoEditando.nombre,

                tipo: equipoEditando.tipo,

                ubicacion: equipoEditando.ubicacion,

                direccionIP: equipoEditando.direccionIP,

                sistemaOperativo: equipoEditando.sistemaOperativo,

                estado: equipoEditando.estado

            });

        } else {

            setFormulario({

                nombre: "",

                tipo: "Servidor",

                ubicacion: "",

                direccionIP: "",

                sistemaOperativo: "",

                estado: "Operativo"

            });

        }

    }, [equipoEditando]);

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

            tipo: "Servidor",

            ubicacion: "",

            direccionIP: "",

            sistemaOperativo: "",

            estado: "Operativo"

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

                <label>Tipo</label>

                <select
                    name="tipo"
                    value={formulario.tipo}
                    onChange={handleChange}
                >

                    <option value="Servidor">Servidor</option>
                    <option value="Computador">Computador</option>
                    <option value="Router">Router</option>
                    <option value="Firewall">Firewall</option>
                    <option value="Switch">Switch</option>
                    <option value="Otro">Otro</option>

                </select>

            </div>

            <div className="form-group">

                <label>Ubicación</label>

                <input
                    type="text"
                    name="ubicacion"
                    value={formulario.ubicacion}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Dirección IP</label>

                <input
                    type="text"
                    name="direccionIP"
                    value={formulario.direccionIP}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Sistema Operativo</label>

                <input
                    type="text"
                    name="sistemaOperativo"
                    value={formulario.sistemaOperativo}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Estado</label>

                <select
                    name="estado"
                    value={formulario.estado}
                    onChange={handleChange}
                >

                    <option value="Operativo">Operativo</option>

                    <option value="En Mantención">En Mantención</option>

                    <option value="Fuera de Servicio">Fuera de Servicio</option>

                </select>

            </div>

            <button
                className="btn-guardar"
                type="submit"
            >

                {

                    equipoEditando

                        ? "Actualizar Equipo"

                        : "Guardar Equipo"

                }

            </button>

        </form>

    );

}

export default FormularioEquipo;