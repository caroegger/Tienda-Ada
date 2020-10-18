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
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const botonGrilla = document.getElementById("boton-grilla")
const botonLista = document.getElementById("boton-lista")
const descripcionProducto = document.querySelectorAll(".descripcion-producto")

//FILTROS BUSQUEDA


//MEDIA QUERY
const botonFiltrosQuery = document.querySelector(".boton-filtros-query")
const filtrosMQuery = document.querySelector("#aside")



//////////////////////////////////////////////////////////////////////


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
    checkout.classList.remove("ocultar")
    document.body.classList.add("no-scroll")
}
botonSalirCheckout.onclick = () => {
    overlayCheckout.classList.add("ocultar")
    checkout.classList.add("ocultar")
    document.body.classList.remove("no-scroll")
}

//VACIAR CARRITO
abrirModalVaciar.onclick = () => {
    modalVaciar.classList.remove("ocultar")
    overlayVaciar.classList.remove("ocultar")
    document.body.classList.add("no-scroll")
}
cancelarVaciar.onclick = () => {
    modalVaciar.classList.add("ocultar")
    overlayVaciar.classList.add("ocultar")
}

// GRILLA O LISTA

botonGrilla.onclick = () => {
    contenedorTarjetas.classList.remove("vista-lista")
    for (let tarjeta of tarjetas) {
        tarjeta.classList.add("vista-grilla")
    }
    for (let descripcion of descripcionProducto) {
        descripcion.classList.remove("ocultar")
    }
}

//FILTROS BUSQUEDA
const tarjetas = document.getElementsByClassName("tarjeta")
const filtroBusqueda = document.querySelector("#barra-busqueda")
const filtroCategoria = document.getElementsByClassName("filtro-categoria")
const filtroPuntaje = document.getElementsByClassName("filtro-puntaje")




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
        filtrarTarjetas()
    }
}

const filtrarTarjetas = () => {
    for (let tarjeta of tarjetas) {
        if (pasaFiltros(tarjeta)) {
        mostrarTarjetas(tarjeta)
        } else {
        ocultarTarjetas(tarjeta)
        }
    }    
}

const hayAlgoEscritoEnBusqueda = () => {
    return Boolean(filtroBusqueda.value)
}


const coincideBusquedaConTarjeta = (tarjeta) => {
    const nombreTarjeta = tarjeta.dataset.busqueda.toLowerCase()
    const busquedaTarjeta = filtroBusqueda.value.toLowerCase()
    if (nombreTarjeta.includes(busquedaTarjeta)) {
      return true
    } else {
      return false
    }
}

const pasaFiltroBusqueda = (tarjeta) => {
    if (hayAlgoEscritoEnBusqueda()) {
      return coincideBusquedaConTarjeta(tarjeta)
    } else {
      return true
    }
}

const hayAlgunaCategoriaMarcada = () => {
    for (let checkbox of filtroCategoria) {
      if (checkbox.checked) {
        return true
      }
    }
    return false
}

const coincideCategoriaConTarjeta = (tarjeta) => {
    for (let checkbox of filtroCategoria) {
        if (checkbox.value === tarjeta.dataset.categoria && checkbox.checked) {
        return true
        }
    }
    return false
}

    
const pasaFiltroCategoria = (tarjeta) => {
    if (hayAlgunaCategoriaMarcada()) {
      return coincideCategoriaConTarjeta(tarjeta)
    } else {
      return true
    }
}

const hayAlgunPuntajeMarcado = () => {
    for (let checkbox of filtroPuntaje) {
      if (checkbox.checked) {
        return true
      }
    }
    return false
}

const coincidePuntajeConTarjeta = (tarjeta) => {
for (let checkbox of filtroPuntaje) {
    if (checkbox.value === tarjeta.dataset.puntaje && checkbox.checked) {
    return true
    }
}
return false
}

const pasaFiltroPuntaje = (tarjeta) => {
    if (hayAlgunPuntajeMarcado()) {
      return coincidePuntajeConTarjeta(tarjeta)
    } else {
      return true
    }
}

const pasaFiltros = (tarjeta) => {
    if (
        pasaFiltroBusqueda(tarjeta) == true &&
        pasaFiltroCategoria(tarjeta) == true &&
        pasaFiltroPuntaje(tarjeta) == true
    ) {
        return true
    } else {
        return false
    }
}

const mostrarTarjetas = (tarjeta) => {
    return tarjeta.classList.remove("ocultar")
}
  
const ocultarTarjetas = (tarjeta) => {
    return tarjeta.classList.add("ocultar")
}

//MEDIA QUERY
// botonFiltrosQuery.onclick = () => {
//     filtrosMQuery.classList.add(".desplegar")
//     document.body.classList.add(".no-scroll")
// }