import { useEffect, useState } from "react";
import api from "../../services/api";

function FormularioIncidente({

    onGuardar,

    incidenteEditando

}) {

    const [usuarios, setUsuarios] = useState([]);
    const [tecnicos, setTecnicos] = useState([]);
    const [equipos, setEquipos] = useState([]);

    const [formulario, setFormulario] = useState({

        titulo: "",

        descripcion: "",

        prioridad: "Media",

        estado: "Pendiente",

        usuario: "",

        tecnico: "",

        equipo: ""

    });

    useEffect(() => {

        cargarDatos();

    }, []);

    useEffect(() => {

        if (incidenteEditando) {

            setFormulario({

                _id: incidenteEditando._id,

                titulo: incidenteEditando.titulo,

                descripcion: incidenteEditando.descripcion,

                prioridad: incidenteEditando.prioridad,

                estado: incidenteEditando.estado,

                usuario: incidenteEditando.usuario?._id || "",

                tecnico: incidenteEditando.tecnico?._id || "",

                equipo: incidenteEditando.equipo?._id || ""

            });

        } else {

            setFormulario({

                titulo: "",

                descripcion: "",

                prioridad: "Media",

                estado: "Pendiente",

                usuario: "",

                tecnico: "",

                equipo: ""

            });

        }

    }, [incidenteEditando]);

    const cargarDatos = async () => {

        try {

            const usuariosRes = await api.get("/usuarios");
            const tecnicosRes = await api.get("/tecnicos");
            const equiposRes = await api.get("/equipos");

            setUsuarios(usuariosRes.data);
            setTecnicos(tecnicosRes.data);
            setEquipos(equiposRes.data);

        } catch (error) {

            console.error(error);

        }

    };

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

            titulo: "",

            descripcion: "",

            prioridad: "Media",

            estado: "Pendiente",

            usuario: "",

            tecnico: "",

            equipo: ""

        });

    };

    return (

        <form
            className="formulario-usuario"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>Título</label>

                <input
                    name="titulo"
                    value={formulario.titulo}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Descripción</label>

                <input
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-group">

                <label>Prioridad</label>

                <select
                    name="prioridad"
                    value={formulario.prioridad}
                    onChange={handleChange}
                >

                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                    <option value="Crítica">Crítica</option>

                </select>

            </div>

            <div className="form-group">

                <label>Estado</label>

                <select
                    name="estado"
                    value={formulario.estado}
                    onChange={handleChange}
                >

                    <option value="Pendiente">Pendiente</option>
                    <option value="En Proceso">En Proceso</option>
                    <option value="Resuelto">Resuelto</option>
                    <option value="Cerrado">Cerrado</option>

                </select>

            </div>

            <div className="form-group">

                <label>Usuario</label>

                <select
                    name="usuario"
                    value={formulario.usuario}
                    onChange={handleChange}
                    required
                >

                    <option value="">Seleccione</option>

                    {usuarios.map((usuario) => (

                        <option
                            key={usuario._id}
                            value={usuario._id}
                        >

                            {usuario.nombre}

                        </option>

                    ))}

                </select>

            </div>

            <div className="form-group">

                <label>Técnico</label>

                <select
                    name="tecnico"
                    value={formulario.tecnico}
                    onChange={handleChange}
                >

                    <option value="">Seleccione</option>

                    {tecnicos.map((tecnico) => (

                        <option
                            key={tecnico._id}
                            value={tecnico._id}
                        >

                            {tecnico.nombre}

                        </option>

                    ))}

                </select>

            </div>

            <div className="form-group">

                <label>Equipo</label>

                <select
                    name="equipo"
                    value={formulario.equipo}
                    onChange={handleChange}
                    required
                >

                    <option value="">Seleccione</option>

                    {equipos.map((equipo) => (

                        <option
                            key={equipo._id}
                            value={equipo._id}
                        >

                            {equipo.nombre}

                        </option>

                    ))}

                </select>

            </div>

            <button
                className="btn-guardar"
                type="submit"
            >

                {

                    incidenteEditando

                        ? "Actualizar Incidente"

                        : "Registrar Incidente"

                }

            </button>

        </form>

    );

}

export default FormularioIncidente;