import dotenv from "dotenv";
import app from "./app.js";
import { Server } from "socket.io";

dotenv.config();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
});

// Socket.io


const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("conectado a socket.io");

    // definir los eventos de socket.io
    socket.on("prueba", (nombre) => {
        console.log("prueba desde socket.io", nombre);

        socket.emit("respuesta", {nombre:"stiben"})
    });

    socket.on("newProduct", product => {
        console.log(product)
    });

    socket.on("products", () => {
        socket.join('projects')
        socket.emit('respuesta', {nombre: 'stiben'})
    });

    socket.on("disableProduct", (id) => {
        console.log("eliminando el producto", id);
        socket.on("newListProducts").emit("productDisabled");
    });
});
 