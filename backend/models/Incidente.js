import mongoose from "mongoose";

const incidenteSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },

    descripcion: {
      type: String,
      required: true,
      trim: true,
    },

    prioridad: {
      type: String,
      enum: ["Baja", "Media", "Alta", "Crítica"],
      default: "Media",
    },

    estado: {
      type: String,
      enum: [
        "Pendiente",
        "En Proceso",
        "Resuelto",
        "Cerrado",
      ],
      default: "Pendiente",
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    tecnico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tecnico",
      default: null,
    },

    equipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipo",
      required: true,
    },

    evidencias: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Evidencia",
      },
    ],

    bitacoras: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bitacora",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Incidente", incidenteSchema);