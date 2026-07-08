import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

import HeaderEquipos from "../components/Equipos/HeaderEquipos";
import FormularioEquipo from "../components/Equipos/FormularioEquipo";
import TablaEquipos from "../components/Equipos/TablaEquipos";

import "../styles/usuarios.css";

function Equipos() {

    const [equipos, setEquipos] = useState([]);

    const [equipoEditando, setEquipoEditando] = useState(null);

    useEffect(() => {

        obtenerEquipos();

    }, []);

    const obtenerEquipos = async () => {

        try {

            const respuesta = await api.get("/equipos");

            setEquipos(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    const crearEquipo = async (equipo) => {

        try {

            await api.post("/equipos", equipo);

            obtenerEquipos();

        } catch (error) {

            console.error(error);

            alert("No fue posible crear el equipo.");

        }

    };

    const editarEquipo = async (equipo) => {

        try {

            await api.put(`/equipos/${equipo._id}`, equipo);

            obtenerEquipos();

            setEquipoEditando(null);

        } catch (error) {

            console.error(error);

        }

    };

    const eliminarEquipo = async (id) => {

        if (!window.confirm("¿Eliminar equipo?")) return;

        try {

            await api.delete(`/equipos/${id}`);

            obtenerEquipos();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Layout>

            <HeaderEquipos />

            <FormularioEquipo
                onGuardar={
                    equipoEditando
                        ? editarEquipo
                        : crearEquipo
                }
                equipoEditando={equipoEditando}
            />

            <TablaEquipos
                equipos={equipos}
                onEditar={setEquipoEditando}
                onEliminar={eliminarEquipo}
            />

        </Layout>

    );

}

export default Equipos;