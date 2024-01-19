document.addEventListener('DOMContentLoaded', function () {
    const canva = document.getElementById("canva");
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    const contexto = canva.getContext('2d');
    var palabras = ["COMPUTADORA", "CPU", "MOUSE"];
    var numeroAleatorio = Math.floor(Math.random*palabras.length)

    cargarJuego();
})

function cargarJuego(){
    window.alert("Hola mundo");
}