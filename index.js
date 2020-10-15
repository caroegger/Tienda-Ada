
const botonAbrirCarrito = document.getElementById("abrir-carrito")
const botonCerrarCarrito = document.getElementById("cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlay = document.getElementById("overlay")

botonAbrirCarrito.onclick = () => {
    overlay.classList.remove("ocultar")
}
botonCerrarCarrito.onclick = () => {
    overlay.classList.add("ocultar")
}
