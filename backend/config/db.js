import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("URI:", process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Atlas conectado");
    } catch (error) {
        console.error("❌ Error al conectar MongoDB");
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;