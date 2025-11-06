import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import petRoutes from "./src/routes/petRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => res.send("🐾 Virtual Pet API Running!"));
app.use("/api/pets", petRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
