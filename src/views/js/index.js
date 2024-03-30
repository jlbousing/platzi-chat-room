const socket = io();

//SELECCION DE BOTONES QUE PERMITIRAN CONECTAR A LA SALA
const connectRoom1 = document.querySelector("#connectRoom1");
const connectRoom2 = document.querySelector("#connectRoom2");
const connectRoom3 = document.querySelector("#connectRoom3");


//EVENTOS QUE AL HACER CLICK ME CONECTE A LAS SALAS
connectRoom1.addEventListener("click", () => {
    socket.emit("connect to room","room1");
});

connectRoom2.addEventListener("click", () => {
    socket.emit("connect to room","room2");
});

connectRoom3.addEventListener("click", () => {
    socket.emit("connect to room","room3");
});

//ENVIAR MENSAJES
const sendMessage = document.querySelector("#sendMessage");

sendMessage.addEventListener("click", () => {

    console.log("sdasdsdadadkadkd")
    const message = prompt("Escribe tu mensaje: ");

    socket.emit("message", message);
});

//RECIBIR EL EVENTO DEL MENSAJE
socket.on("send message", (data) => {

    const {room, message } = data;

    const li = document.createElement("li");
    li.textContent = message;

    document.querySelector(`#${room}`).append(li);
});