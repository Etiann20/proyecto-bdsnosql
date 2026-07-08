import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
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
    contrasena: {
      type: String,
      required: true,
      minlength: 8,
    },
    rol: {
      type: String,
      required: true,
      enum: ["Administrador", "Supervisor", "Analista"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Usuario", usuarioSchema);