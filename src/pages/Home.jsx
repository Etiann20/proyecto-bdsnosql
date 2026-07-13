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

const meses = [
    "",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

function Home() {

    const [estadisticas, setEstadisticas] = useState({

        usuarios: 0,

        tecnicos: 0,

        equipos: 0,

        incidentes: 0,

        criticos: 0,

        pendientes: 0,

        resueltos: 0,

        cerrados: 0,

        incidentesPorEstado: [],

        incidentesPorPrioridad: [],

        incidentesPorMes: [],

        topTecnico: null,

        topEquipo: null

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

                <section className="analytics-container">

                    <h2 className="analytics-title">
                        📊 Consultas Analíticas
                    </h2>

                    <div className="analytics-grid">

                        <div className="analytics-card">

                            <h3>📈 Resumen General</h3>

                            <p>🔥 Incidentes críticos: <strong>{estadisticas.criticos}</strong></p>

                            <p>⏳ Pendientes: <strong>{estadisticas.pendientes}</strong></p>

                            <p>✅ Resueltos: <strong>{estadisticas.resueltos}</strong></p>

                            <p>🔒 Cerrados: <strong>{estadisticas.cerrados}</strong></p>

                        </div>

                        <div className="analytics-card">

                            <h3>🏆 Indicadores</h3>

                            <p>

                                <strong>Técnico con más incidentes</strong>

                                <br />

                                <span className="analytics-highlight">

                                    {

                                        estadisticas.topTecnico

                                            ? estadisticas.topTecnico.nombre

                                            : "Sin datos"

                                    }

                                </span>

                                <br />

                                Cantidad: {

                                    estadisticas.topTecnico

                                        ? estadisticas.topTecnico.cantidad

                                        : 0

                                }

                            </p>

                            <br />

                            <p>

                                <strong>Equipo con más incidentes</strong>

                                <br />

                                <span className="analytics-highlight">

                                    {

                                        estadisticas.topEquipo

                                            ? estadisticas.topEquipo.nombre

                                            : "Sin datos"

                                    }

                                </span>

                                <br />

                                Cantidad: {

                                    estadisticas.topEquipo

                                        ? estadisticas.topEquipo.cantidad

                                        : 0

                                }

                            </p>

                        </div>

                        <div className="analytics-card">

                            <h3>🚨 Incidentes por prioridad</h3>

                            <ul>

                                {

                                    estadisticas.incidentesPorPrioridad.map(item => (

                                        <li key={item._id}>

                                            {item._id}: <strong>{item.cantidad}</strong>

                                        </li>

                                    ))

                                }

                            </ul>

                        </div>

                        <div className="analytics-card">

                            <h3>📋 Incidentes por estado</h3>

                            <ul>

                                {

                                    estadisticas.incidentesPorEstado.map(item => (

                                        <li key={item._id}>

                                            {item._id}: <strong>{item.cantidad}</strong>

                                        </li>

                                    ))

                                }

                            </ul>

                        </div>

                        <div className="analytics-card">

                            <h3>📅 Incidentes por mes</h3>

                            <ul>

                                {

                                    estadisticas.incidentesPorMes.map(item => (

                                        <li key={item._id}>

                                            {meses[item._id]}: <strong>{item.cantidad}</strong>

                                        </li>

                                    ))

                                }

                            </ul>

                        </div>

                    </div>

                </section>

            </div>

        </Layout>

    );

}

export default Home;