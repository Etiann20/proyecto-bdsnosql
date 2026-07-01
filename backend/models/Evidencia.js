import mongoose from "mongoose";

const evidenciaSchema = new mongoose.Schema(
  {
    incidente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incidente",
      required: true,
    },

    archivos: [
      {
        nombreArchivo: String,
        tipoArchivo: String,
        rutaArchivo: String,
        fechaSubida: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Evidencia", evidenciaSchema);