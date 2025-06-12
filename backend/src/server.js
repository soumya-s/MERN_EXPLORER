import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT||4001;

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use("/api/notes",notesRoutes);
connectDB();
 app.listen(PORT,()=>{
     console.log("server started");
});