import mongoose from "mongoose";

const incidenteSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    tecnico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tecnico",
      required: true,
    },

    equipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipo",
      required: true,
    },

    tipo: {
      type: String,
      required: true,
    },

    descripcion: {
      type: String,
      required: true,
    },

    prioridad: {
      type: String,
      enum: ["Baja", "Media", "Alta", "Crítica"],
      default: "Media",
    },

    estado: {
      type: String,
      enum: ["Pendiente", "En proceso", "Resuelto"],
      default: "Pendiente",
    },

    fechaReporte: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Incidente", incidenteSchema);