import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT||5001;
app.use(cors({
        origin : "http://localhost:5173",
    })
);

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// app.use((req,res,next) =>{
//     console.log(`Req method is ${req.method} & Req url is ${req.url}`)
//     next();
// });


connectDB().then( () => {
     app.listen(PORT,()=>{
     console.log("server started");
    })


    app.use("/api/notes",notesRoutes);
});