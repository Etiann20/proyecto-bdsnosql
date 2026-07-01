import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Header from "../components/Header";

import {
    FiUsers,
    FiTool,
    FiMonitor,
    FiAlertTriangle
} from "react-icons/fi";

import "../styles/dashboard.css";

function Home() {

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
                        valor="15"
                        icono={<FiUsers />}
                    />

                    <StatCard
                        titulo="Técnicos"
                        valor="8"
                        icono={<FiTool />}
                    />

                    <StatCard
                        titulo="Equipos"
                        valor="125"
                        icono={<FiMonitor />}
                    />

                    <StatCard
                        titulo="Incidentes"
                        valor="42"
                        icono={<FiAlertTriangle />}
                    />

                </div>

            </div>

        </Layout>

    );

}

export default Home;