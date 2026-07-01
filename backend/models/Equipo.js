import mongoose from "mongoose";

const equipoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    tipo: {
      type: String,
      required: true,
      enum: ["PC", "Notebook", "Servidor", "Impresora"],
    },

    ip: {
      type: String,
      required: true,
    },

    ubicacion: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      enum: ["Operativo", "En reparación", "Fuera de servicio"],
      default: "Operativo",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Equipo", equipoSchema);