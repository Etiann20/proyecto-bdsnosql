import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import FormularioUsuario from "../components/Usuarios/FormularioUsuario";
import HeaderUsuarios from "../components/Usuarios/HeaderUsuarios";
import TablaUsuarios from "../components/Usuarios/TablaUsuarios";
import "../styles/usuarios.css";

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const [usuarioEditando, setUsuarioEditando] = useState(null);

    useEffect(() => {

        obtenerUsuarios();

    }, []);

    const obtenerUsuarios = async () => {

        try {

            const respuesta = await api.get("/usuarios");

            setUsuarios(respuesta.data);

        } catch (error) {

            console.error(error);

            alert("No fue posible obtener los usuarios.");

        }

    };

    const crearUsuario = async (usuario) => {

        try {

            await api.post("/usuarios", usuario);

            obtenerUsuarios();

        } catch (error) {

            console.error(error);

            alert("Error al crear el usuario.");

        }

    };

    const editarUsuario = async (usuario) => {

        try {

            await api.put(`/usuarios/${usuario._id}`, usuario);

            obtenerUsuarios();

            setUsuarioEditando(null);

        } catch (error) {

            console.error(error);

            alert("Error al actualizar el usuario.");

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

                <FormularioUsuario
                    onGuardar={
                        usuarioEditando
                            ? editarUsuario
                            : crearUsuario
                    }
                    usuarioEditando={usuarioEditando}
                />

            </div>

            <TablaUsuarios
                usuarios={usuarios}
                onEditar={setUsuarioEditando}
                onEliminar={eliminarUsuario}
            />

        </Layout>

    );

}

export default Usuarios;