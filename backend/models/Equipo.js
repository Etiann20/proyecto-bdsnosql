import mongoose from "mongoose";

const equipoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    tipo: {
      type: String,
      enum: [
        "Servidor",
        "Computador",
        "Router",
        "Firewall",
        "Switch",
        "Otro",
      ],
      required: true,
    },

    ubicacion: {
      type: String,
      required: true,
      trim: true,
    },

    direccionIP: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    sistemaOperativo: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      enum: [
        "Operativo",
        "En Mantención",
        "Fuera de Servicio",
      ],
      default: "Operativo",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Equipo", equipoSchema);