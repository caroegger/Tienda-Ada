
//ABRIR Y CERRAR CARRITO
const botonAbrirCarrito = document.getElementById("abrir-carrito")
const botonCerrarCarrito = document.getElementById("cerrar-carrito")
const carrito = document.getElementById("carrito")
const overlayCarrito = document.getElementById("overlay-carrito")
//ABRIR Y CERRAR CHECKOUT
const botonAbrirCheckout = document.getElementById("boton-compra")
const botonSalirCheckout = document.getElementById("seguir-comprando")
const checkout = document.getElementById("checkout")
const overlayCheckout = document.getElementById("overlay-checkout")
//VACIAR CARRITO
const abrirModalVaciar = document.getElementById("boton-vaciar")
const cancelarVaciar = document.getElementById("cancelar-vaciar")
const modalVaciar = document.getElementById("modal-vaciar")
const overlayVaciar = document.getElementById("overlay-vaciar")
//GRILLA O LISTA

//FILTROS BUSQUEDA
const tarjetas = document.querySelectorAll(".tarjeta")
const filtroBusqueda = document.querySelector("#barra-busqueda")
const filtroCategoria = document.getElementsByClassName("filtro-categoria")
const filtroPuntaje = document.getElementsByClassName("filtro-puntaje")



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

//VACIAR CARRITO
abrirModalVaciar.onclick = () => {
    modalVaciar.classList.remove("ocultar")
    overlayVaciar.classList.remove("ocultar")
    document.body.classList.add("no-scroll");
}
cancelarVaciar.onclick = () => {
    modalVaciar.classList.add("ocultar")
    overlayVaciar.classList.add("ocultar")
}

// GRILLA O LISTA

//FILTROS BUSQUEDA
const pasaFiltroBusqueda = (tarjeta) => {
    if (hayAlgoEnBusqueda()) {
        if (busquedaCoincideConTarjeta(tarjeta)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const pasaFiltroCategorias = (tarjeta) => {
    if (hayCategoriaMarcada()) {
        if (categoriaMarcadaCoincideConTarjeta(tarjeta)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const pasaFiltroPuntaje = (tarjeta) => {
    if (hayPuntajeMarcado()) {
        if (puntajeMarcadoCoincideConTarjeta(tarjeta)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const pasaTodosLosFiltros = (tarjeta) => {
    if (pasaFiltroBusqueda(tarjeta) && pasaFiltroCategorias(tarjeta) && pasaFiltroPuntaje(tarjeta)) {
        return true
    }
}

const puntajeMarcadoCoincideConTarjeta = (tarjeta) => {
    for (let checkbox of filtroPuntaje) {
        if (checkbox.checked) {
            if (checkbox.value === tarjeta.dataset.puntaje) {
                return true
            }
        }
    }
    return false
}

const categoriaMarcadaCoincideConTarjeta = (tarjeta) => {
    for (let checkbox of filtroCategoria) {
        if (checkbox.checked) {
            if (checkbox.value === tarjeta.dataset.categoria) {
                return true
            }
        }
    }
    return false
}

const ocultarTarjeta = (tarjeta) => {
    return tarjeta.classList.add("ocultar")
}

const mostrarTarjeta = (tarjeta) => {
    return tarjeta.classList.remove("ocultar")
}

const filtrarTarjetas = () => {
    for (let tarjeta of tarjetas) {
        if (pasaTodosLosFiltros(tarjeta)) {
            mostrarTarjeta(tarjeta)
        }
        else {
            ocultarTarjeta(tarjeta)
        }
    }
}

const busquedaCoincideConTarjeta = (tarjeta) => {
    if (tarjeta.dataset.nombre.busqueda.includes(filtroBusqueda.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }
}

const hayCategoriaMarcada = () => {
    for (let checkbox of filtroCategoria) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

const hayPuntajeMarcado = () => {
    for (let checkbox of filtroPuntaje) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

const hayAlgoEnBusqueda = () => {
    if (filtroBusqueda.value) {
        return true
    }
    else {
        return false
    }
}

filtroBusqueda.oninput = () => {
    filtrarTarjetas()
}

for (let checkbox of filtroCategoria) {
    checkbox.oninput = () => {
        filtrarTarjetas()
    }
}

for (let checkbox of filtroPuntaje) {
    checkbox.oninput = () => {
        filtrarTarjetas
    }
}