import { NavLink } from "react-router-dom";

import {
    FiHome,
    FiAlertTriangle,
    FiMonitor,
    FiTool,
    FiUsers,
    FiShield,
    FiDatabase,
    FiPaperclip,
    FiBookOpen
} from "react-icons/fi";

import "../styles/sidebar.css";

function Sidebar() {

    const usuario = JSON.parse(

        localStorage.getItem("usuario")

    );

    const rol = usuario?.rol;

    return (

        <aside className="sidebar">

            <div className="logo">

                <FiShield className="logo-icon"/>

                <div>

                    <h2>SGIC</h2>

                    <span>
                        Sistema de Gestión
                        <br />
                        de Incidentes
                    </span>

                </div>

            </div>

            <nav>

                <NavLink to="/">

                    <FiHome/>

                    Dashboard

                </NavLink>

                <NavLink to="/incidentes">

                    <FiAlertTriangle/>

                    Incidentes

                </NavLink>

                {(rol === "Administrador" || rol === "Supervisor") && (

                    <>
                        <NavLink to="/equipos">

                            <FiMonitor/>

                            Equipos

                        </NavLink>

                        <NavLink to="/tecnicos">

                            <FiTool/>

                            Técnicos

                        </NavLink>

                        <NavLink to="/evidencias">

                            <FiPaperclip/>

                            Evidencias

                        </NavLink>

                    </>

                )}

                {rol === "Administrador" && (

                    <NavLink to="/usuarios">

                        <FiUsers/>

                        Usuarios

                    </NavLink>

                )}

                {(rol === "Administrador" || rol === "Supervisor") && (

                    <NavLink to="/bitacoras">

                        <FiBookOpen/>

                        Bitácora

                    </NavLink>

                )}

            </nav>

            <div className="sidebar-footer">

                <h4>Estado</h4>

                <div className="status">

                    <FiDatabase/>

                    <span>MongoDB Atlas</span>

                </div>

                <small>🟢 Conectado</small>

                <p>Versión 1.0</p>

            </div>

        </aside>

    );

}

export default Sidebar;