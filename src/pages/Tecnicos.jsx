import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

import HeaderTecnicos from "../components/Tecnicos/HeaderTecnicos";
import FormularioTecnico from "../components/Tecnicos/FormularioTecnico";
import TablaTecnicos from "../components/Tecnicos/TablaTecnicos";

import "../styles/usuarios.css";

function Tecnicos() {

    const [tecnicos, setTecnicos] = useState([]);

    const [tecnicoEditando, setTecnicoEditando] = useState(null);

    useEffect(() => {

        obtenerTecnicos();

    }, []);

    const obtenerTecnicos = async () => {

        try {

            const respuesta = await api.get("/tecnicos");

            setTecnicos(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    const crearTecnico = async (tecnico) => {

        try {

            await api.post("/tecnicos", tecnico);

            obtenerTecnicos();

            return {
                ok: true
            };

        } catch (error) {

            console.error(error);

            return {

                ok: false,

                mensaje:

                    error.response?.data?.errores?.[0]?.msg ||

                    error.response?.data?.mensaje ||

                    "No fue posible crear el técnico."

            };

        }

    };

    const editarTecnico = async (tecnico) => {

        try {

            await api.put(`/tecnicos/${tecnico._id}`, tecnico);

            obtenerTecnicos();

            setTecnicoEditando(null);

            return {
                ok: true
            };

        } catch (error) {

            console.error(error);

            return {

                ok: false,

                mensaje:

                    error.response?.data?.errores?.[0]?.msg ||

                    error.response?.data?.mensaje ||

                    "No fue posible actualizar."

            };

        }

    };

    const eliminarTecnico = async (id) => {

        if (!window.confirm("¿Eliminar técnico?")) return;

        try {

            await api.delete(`/tecnicos/${id}`);

            obtenerTecnicos();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Layout>

            <HeaderTecnicos />

            <FormularioTecnico
                onGuardar={
                    tecnicoEditando
                        ? editarTecnico
                        : crearTecnico
                }
                tecnicoEditando={tecnicoEditando}
            />

            <TablaTecnicos
                tecnicos={tecnicos}
                onEditar={setTecnicoEditando}
                onEliminar={eliminarTecnico}
            />

        </Layout>

    );

}

export default Tecnicos;