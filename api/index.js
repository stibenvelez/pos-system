import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import cors from "cors";
import routes from "./routes/routes.js";

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api/', routes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
});

