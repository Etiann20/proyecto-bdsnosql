import mongoose from "mongoose";

const bitacoraSchema = new mongoose.Schema(
  {
    accion: {
      type: String,
      required: true,
    },

    descripcion: {
      type: String,
      required: true,
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Bitacora", bitacoraSchema);