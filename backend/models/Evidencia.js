import mongoose from "mongoose";

const evidenciaSchema = new mongoose.Schema(
  {
    nombreArchivo: {
      type: String,
      required: true,
    },

    tipoArchivo: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    descripcion: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Evidencia", evidenciaSchema);