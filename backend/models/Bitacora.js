import mongoose from "mongoose";

const bitacoraSchema = new mongoose.Schema(
  {
    incidente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incidente",
      required: true,
    },

    estado: {
      type: String,
      enum: ["Pendiente", "En proceso", "Resuelto"],
      required: true,
    },

    accionesCorrectivas: [
      {
        type: String,
      },
    ],

    tiempo: {
      fechaInicio: Date,
      fechaFin: Date,
    },

    informe: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bitacora", bitacoraSchema);