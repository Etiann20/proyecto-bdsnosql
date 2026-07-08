import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import usuarioRoutes from "./routes/usuarioRoutes.js";
import tecnicoRoutes from "./routes/tecnicoRoutes.js";
import equipoRoutes from "./routes/equipoRoutes.js";
import incidenteRoutes from "./routes/incidenteRoutes.js";
import evidenciaRoutes from "./routes/evidenciaRoutes.js";
import bitacoraRoutes from "./routes/bitacoraRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Rutas API
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/tecnicos", tecnicoRoutes);
app.use("/api/equipos", equipoRoutes);
app.use("/api/incidentes", incidenteRoutes);
app.use("/api/evidencias", evidenciaRoutes);
app.use("/api/bitacoras", bitacoraRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;



app.use("/api/auth", authRoutes);

app.use("/api/tecnicos", tecnicoRoutes);

app.use("/api/equipos", equipoRoutes);

app.use("/api/incidentes", incidenteRoutes);

app.use("/api/evidencias", evidenciaRoutes);

app.use("/api/bitacoras", bitacoraRoutes);


app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
});

