import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

import HeaderEvidencias from "../components/Evidencias/HeaderEvidencias";
import FormularioEvidencia from "../components/Evidencias/FormularioEvidencia";
import TablaEvidencias from "../components/Evidencias/TablaEvidencias";

import "../styles/usuarios.css";

function Evidencias() {

    const [evidencias, setEvidencias] = useState([]);

    const [evidenciaEditando, setEvidenciaEditando] = useState(null);

    useEffect(() => {

        obtenerEvidencias();

    }, []);

    const obtenerEvidencias = async () => {

        try {

            const respuesta = await api.get("/evidencias");

            setEvidencias(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    const crearEvidencia = async (evidencia) => {

        try {

            await api.post("/evidencias", evidencia);

            obtenerEvidencias();

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

                    "No fue posible registrar la evidencia."

            };

        }

    };

    const editarEvidencia = async (evidencia) => {

        try {

            await api.put(`/evidencias/${evidencia._id}`, evidencia);

            obtenerEvidencias();

            setEvidenciaEditando(null);

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

                    "No fue posible actualizar la evidencia."

            };

        }

    };

    const eliminarEvidencia = async (id) => {

        if (!window.confirm("¿Desea eliminar esta evidencia?")) return;

        try {

            await api.delete(`/evidencias/${id}`);

            obtenerEvidencias();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Layout>

            <HeaderEvidencias />

            <div style={{ marginBottom: "20px" }}>

                <FormularioEvidencia

                    onGuardar={

                        evidenciaEditando

                            ? editarEvidencia

                            : crearEvidencia

                    }

                    evidenciaEditando={evidenciaEditando}

                />

            </div>

            <TablaEvidencias

                evidencias={evidencias}

                onEditar={setEvidenciaEditando}

                onEliminar={eliminarEvidencia}

            />

        </Layout>

    );

}

export default Evidencias;