import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import api from "../services/api";

import HeaderBitacoras from "../components/Bitacoras/HeaderBitacoras";

import TablaBitacoras from "../components/Bitacoras/TablaBitacoras";

import "../styles/usuarios.css";

function Bitacoras() {

    const [bitacoras, setBitacoras] = useState([]);

    useEffect(() => {

        obtenerBitacoras();

    }, []);

    const obtenerBitacoras = async () => {

        try {

            const respuesta = await api.get("/bitacoras");

            setBitacoras(respuesta.data);

        } catch (error) {

            console.error(error);

            alert("No fue posible obtener la bitácora.");

        }

    };

    return (

        <Layout>

            <HeaderBitacoras />

            <TablaBitacoras

                bitacoras={bitacoras}

            />

        </Layout>

    );

}

export default Bitacoras;