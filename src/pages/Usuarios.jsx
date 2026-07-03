import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import FormularioUsuario from "../components/Usuarios/FormularioUsuario";
import HeaderUsuarios from "../components/Usuarios/HeaderUsuarios";
import "../styles/usuarios.css";
import TablaUsuarios from "../components/Usuarios/TablaUsuarios";
import api from "../services/api";

function Usuarios() {

    const [usuarioEditando, setUsuarioEditando] = useState(null);

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        obtenerUsuarios();

    }, []);

    const crearUsuario = async (usuario) => {

        try {
    
            await api.post("/usuarios", usuario);
    
            obtenerUsuarios();
    
        } catch (error) {
    
            console.error(error);
    
            alert("Error al crear el usuario");
    
        }
    
    };

    const editarUsuario = async (usuario) => {

        try {
    
            await api.put(`/usuarios/${usuario._id}`, usuario);
    
            obtenerUsuarios();
    
            setUsuarioEditando(null);
    
        } catch (error) {
    
            console.error(error);
    
        }
    
    };

    const eliminarUsuario = async (id) => {

        const confirmar = window.confirm(
            "¿Desea eliminar este usuario?"
        );
    
        if (!confirmar) return;
    
        try {
    
            await api.delete(`/usuarios/${id}`);
    
            obtenerUsuarios();
    
        } catch (error) {
    
            console.error(error);
    
            alert("No fue posible eliminar el usuario.");
    
        }
    
    };

    return (

        <Layout>

        <HeaderUsuarios />
            <div style={{ marginBottom: "20px" }}>

                <button>
                    + Nuevo Usuario
                </button>

                <FormularioUsuario
                    onGuardar={crearUsuario}
                />

            </div>

            <TablaUsuarios
                usuarios={usuarios}
                onEliminar={eliminarUsuario}
                onEditar={setUsuarioEditando}
            />

        </Layout>

    );

}

export default Usuarios;