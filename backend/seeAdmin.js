import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import connectDB from "./config/db.js";
import Usuario from "./models/Usuario.js";

dotenv.config();

const crearAdministrador = async () => {

    try {

        await connectDB();

        const existe = await Usuario.findOne({

            correo: "admin@sgic.cl"

        });

        if (existe) {

            console.log("⚠ El administrador ya existe.");

            process.exit();

        }

        const password = await bcrypt.hash(

            "admin123",

            10

        );

        const admin = new Usuario({

            nombre: "Administrador",

            correo: "admin@sgic.cl",

            contrasena: password,

            rol: "Administrador"

        });

        await admin.save();

        console.log("");

        console.log("====================================");

        console.log("Administrador creado correctamente");

        console.log("");

        console.log("Correo:");

        console.log("admin@sgic.cl");

        console.log("");

        console.log("Contraseña:");

        console.log("admin123");

        console.log("====================================");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit(1);

    }

};

crearAdministrador();