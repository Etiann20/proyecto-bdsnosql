import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import api from "../services/api";

import {
    FiUsers,
    FiTool,
    FiMonitor,
    FiAlertTriangle
} from "react-icons/fi";

import "../styles/dashboard.css";

function Home() {

    const [estadisticas, setEstadisticas] = useState({
        usuarios: 0,
        tecnicos: 0,
        equipos: 0,
        incidentes: 0
    });

    useEffect(() => {
        obtenerEstadisticas();
    }, []);

    const obtenerEstadisticas = async () => {

        try {

            const respuesta = await api.get("/dashboard");

            setEstadisticas(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Layout>

            <Header />

            <div className="dashboard">

                <div className="dashboard-header">

                    <h1>Dashboard</h1>

                    <p>
                        Sistema de Gestión de Incidentes de Ciberseguridad
                    </p>

                </div>

                <div className="cards">

                    <StatCard
                        titulo="Usuarios"
                        valor={estadisticas.usuarios}
                        icono={<FiUsers />}
                    />

                    <StatCard
                        titulo="Técnicos"
                        valor={estadisticas.tecnicos}
                        icono={<FiTool />}
                    />

                    <StatCard
                        titulo="Equipos"
                        valor={estadisticas.equipos}
                        icono={<FiMonitor />}
                    />

                    <StatCard
                        titulo="Incidentes"
                        valor={estadisticas.incidentes}
                        icono={<FiAlertTriangle />}
                    />

                </div>

            </div>

        </Layout>

    );

}

export default Home;