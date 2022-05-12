import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes.js";
import { Server } from "socket.io";


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({
    origin: process.env.FRONTEND_URL,
});
const PORT = process.env.PORT || 4000;

app.use('/api/', routes)

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
});


// Socket.io
const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: process.env.FRONTEND_URL,
    },
    maxHttpBufferSize: 1e8,
});

io.on('connection', socket => {
    console.log('conectado a socket.io')

    // definir los eventos de socket.io
    socket.on("prueba", () => {
        console.log("prueba desde socket.io");
    });

}) 

