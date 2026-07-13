import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

import HeaderIncidentes from "../components/Incidentes/HeaderIncidentes";
import FormularioIncidente from "../components/Incidentes/FormularioIncidente";
import TablaIncidentes from "../components/Incidentes/TablaIncidentes";

import "../styles/usuarios.css";

function Incidentes() {

    const [incidentes, setIncidentes] = useState([]);

    const [incidenteEditando, setIncidenteEditando] = useState(null);

    useEffect(() => {

        obtenerIncidentes();

    }, []);

    const obtenerIncidentes = async () => {

        try {

            const respuesta = await api.get("/incidentes");

            setIncidentes(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    const crearIncidente = async (incidente) => {

        try {

            await api.post("/incidentes", incidente);

            obtenerIncidentes();

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

                    "No fue posible registrar el incidente."

            };

        }

    };

    const editarIncidente = async (incidente) => {

        try {
    
            await api.put(`/incidentes/${incidente._id}`, incidente);
    
            obtenerIncidentes();
    
            setIncidenteEditando(null);
    
            return {
    
                ok: true
    
            };
    
        } catch (error) {
    
            console.error(error.response?.data);
    
            console.error(error);
    
            return {
    
                ok: false,
    
                mensaje:
    
                    error.response?.data?.errores?.[0]?.msg ||
    
                    error.response?.data?.mensaje ||
    
                    "No fue posible actualizar el incidente."
    
            };
    
        }
    
    };

    const eliminarIncidente = async (id) => {

        if (!window.confirm("¿Eliminar incidente?")) return;

        try {

            await api.delete(`/incidentes/${id}`);

            obtenerIncidentes();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Layout>

            <HeaderIncidentes />

            <FormularioIncidente

                onGuardar={

                    incidenteEditando

                        ? editarIncidente

                        : crearIncidente

                }

                incidenteEditando={incidenteEditando}

            />

            <TablaIncidentes

                incidentes={incidentes}

                onEditar={setIncidenteEditando}

                onEliminar={eliminarIncidente}

            />

        </Layout>

    );

}

export default Incidentes;