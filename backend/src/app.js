import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Ruta de prueba
app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "Api funcionando correctamente",
        estado: "Ok"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date().toISOString(),
    });
});

export default app;