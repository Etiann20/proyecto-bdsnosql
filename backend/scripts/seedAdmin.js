import "dotenv/config";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

import Usuario from "../models/Usuario.js";

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB conectado");

    const existeAdmin = await Usuario.findOne({
      correo: "admin@admin.com",
    });

    if (existeAdmin) {
      console.log("El usuario administrador ya existe");
      process.exit();
    }

    const contrasenaHash = await bcrypt.hash("Admin123", 10);

    const admin = new Usuario({
      nombre: "Administrador",
      correo: "admin@admin.com",
      contrasena: contrasenaHash,
      rol: "Administrador",
    });

    await admin.save();

    console.log("Administrador creado correctamente");
    console.log({
      correo: "admin@admin.com",
      contrasena: "Admin123",
      rol: "Administrador",
    });

    process.exit();

  } catch (error) {
    console.error("Error creando administrador:", error);
    process.exit(1);
  }
};

seedAdmin();