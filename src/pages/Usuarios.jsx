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

        }

    };

    const crearUsuario = async (usuario) => {

        try {

            await api.post("/usuarios", usuario);

            obtenerUsuarios();

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

                    "No fue posible crear el usuario."

            };

        }

    };

    const editarUsuario = async (usuario) => {

        try {

            await api.put(`/usuarios/${usuario._id}`, usuario);

            obtenerUsuarios();

            setUsuarioEditando(null);

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

                    "No fue posible actualizar el usuario."

            };

        }

    };

    const eliminarUsuario = async (id) => {

        if (!window.confirm("¿Desea eliminar este usuario?")) return;

        try {

            await api.delete(`/usuarios/${id}`);

            obtenerUsuarios();

        } catch (error) {

            console.error(error);

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