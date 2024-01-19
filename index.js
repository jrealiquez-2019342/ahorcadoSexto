document.addEventListener('DOMContentLoaded', function restar() {
    const canva = document.getElementById("myCanvas");
    const contexto = canva.getContext('2d');
    
    var palabras = ["COMPUTADORA", "CPU", "MOUSE"];
    var numeroAleatorio = Math.floor(Math.random*palabras.length)

    cargarJuego();
})

function cargarJuego(){
    window.alert("Juego cargado");

}

function obtenerPalabra() {
    
}

function cargarBotones() {
    
}