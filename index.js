
//ABRIR Y CERRAR CARRITO
const botonAbrirCarrito = document.getElementById("abrir-carrito")
const botonCerrarCarrito = document.getElementById("cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlayCarrito = document.getElementById("overlay-carrito")
//ABRIR Y CERRAR CHECKOUT
const botonAbrirCheckout = document.getElementById("boton-compra")
const botonSalirCheckout = document.getElementById("boton-vaciar")
const checkout = document.getElementById("checkout")
const overlayCheckout = document.getElementById("overlay-checkout")
//VACIAR CARRITO
const abrirModalVaciar = document.getElementById("boton-vaciar")
const cancelarVaciar = document.getElementById("boton-compra")
const modalVaciar = document.getElementById("modal-vaciar")
const overlayVaciar = document.getElementById("overlay-vaciar")

//ABRIR Y CERRAR CARRITO
botonAbrirCarrito.onclick = () => {
    overlayCarrito.classList.remove("ocultar")
    document.body.classList.add("no-scroll");
}
botonCerrarCarrito.onclick = () => {
    overlayCarrito.classList.add("ocultar")
    document.body.classList.remove("no-scroll");
}

//ABRIR Y CERRAR CHECKOUT
botonAbrirCheckout.onclick = () => {
    overlayCheckout.classList.remove("ocultar")
    document.body.classList.add("no-scroll");
}
botonSalirCheckout.onclick = () => {
    overlayCheckout.classList.add("ocultar")
    document.body.classList.remove("no-scroll");
}

// //VACIAR CARRITO
// abrirModalVaciar.onclick = () => {
//     overlayVaciar.classList.remove("ocultar")
//     document.body.classList.add("no-scroll");
// }
// cancelarVaciar.onclick = () => {
//     overlayVaciar.classList.add("ocultar")
//     document.body.classList.remove("no-scroll");
// }
