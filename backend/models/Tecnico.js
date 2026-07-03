import mongoose from "mongoose";

const tecnicoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    correo: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    especialidad: {
      type: String,
      required: true,
    },

    telefono: {
      type: String,
      trim: true,
    },

    estado: {
      type: String,
      enum: [
        "Disponible",
        "Ocupado",
        "Ausente",
      ],
      default: "Disponible",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tecnico", tecnicoSchema);