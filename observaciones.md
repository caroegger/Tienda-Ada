Querida Caro, 

En primer lugar quiero felicitarte por tu trabajo. Se nota que pusiste esfuerzo, y que te esmeraste en entregar un producto lo mas finalizado posible mas alla de las limitaciones de tiempo que tuviste. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web - la unica excepcion es el article del modal de cierre, que deberia ser un aside o un div en todo caso. Los colores y contrastes adecuados. Faltan muchas etiquetas aria, que simplificarian la recorrida para lectores de pantalla en tus formularios. 

Tu formulario de filtros es correcto en terminos de accesibilidad, no asi el del checkout. Nota que tus label son iguales para los radios y para los checkbox, lo que tiene la consecuencia de que hacer click en la frase "tarjeta de descuento" me marca la opcion "Necesito envio". Los checkbox son muy pequeños, y ampliarlos para que puedan marcarse con el label es muy importante para quienes tienen dificultades con la motricidad fina. 

La ausencia mas importante es la de los atributos "alt" en imagenes, algo que consideramos absolutamente necesario para que los lectores puedan comunicar lo que efectivamente hay en tu web. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Habria sido bueno que los agregaras tambien en la parte responsive. No hace falta agregar mas logica - solo mover con css los filtros que ya tenes hechos. 

No esta hecha la funcionalidad de mostrar productos en grilla / columna, y es una ausencia bastante grande. Asumo que fue por falta de tiempo, pero escribime si intentaste hacerla y te trabaste en algo para que lo veamos juntas. 

La ausencia mas importante aqui es que no se actualiza el mensaje que muestra cuantos productos se estan mostrando. Ante la ausencia de la funcionalidad, creo que seria preferible ni siquiera mostrar el mensaje, ya que puede confundir a tus usuarios, si bien entiendo la decision de dejarlo a fines de la entrega del TP. 

Para hacerlo, debemos contar cuantos productos se muestran o no, es decir, cuantas tarjetas tienen la clase "ocultar" nos va a decir cuantas estan ocultas. 

En la funcion "filtrarTarjetas" y en la funcion "limpiarFiltros" podemos llamar a una nueva funcion, contarProductosMostrados(). En esa funcion
- Seleccionamos el mensaje de productos mostrados
- Contamos cuantas tarjetas ocultas hay
- Actualizamos el mensaje con el total de tarjetas menos las tarjetas ocultas. 

```js
const contarProductosMostrados = () => {
    const mensajeProductosMostrados = document.querySelector("#productos-mostrandose")
    const tarjetasOcultas = document.querySelectorAll(".tarjeta.ocultar")
    const totalTarjetas = 12

    mensajeProductosMostrados.textContent = totalTarjetas - tarjetasOcultas.length
}

```

### Carrito

Tu carrito esta bien maquetado, muy hermoso, siguiendo todas las pautas. Se lamenta la ausencia de la animacion al momento de aparecer, podes resolverlo con algo de position + transition al momento de darle la clase "aparecer" al overlay. Siguiendo las consignas, el modal de vaciar carrito deberia cerrarse al apretar "vaciar", asi como ocurre al apretar "cancelar". 

### Checkout

Falta mucha atencion al maquetado aqui, se ve todo algo desprolijo. La parte de HTML esta perfecta, todo lo que es formulario lo tenes muy bien con la excepcion de los label que te comente en accesibilidad.

Tu placeholder se ve recortado porque tus inputs no tienen suficiente ancho para mostrarse entero. Darle un width al input solucionaria esto. El boton de "seguir comprando" no sigue el modelo, deberia tener mas padding para verse del mismo tamaño que el input de enviar el formulario. 

Se lamenta especialmente la ausencia de funciones para encarar los calculos; hubiera preferido al menos un intento comentado si intentaste hacerlas pero no salieron, como para evaluar como lo encaraste. La idea seria asi:

Asumimos que vamos a tener 
- un recargo por tarjeta, que iniciamos en 0
- un recargo por envio, que iniciamos en 0
- un descuento, que iniciamos en 0
- un subtotal, que es el valor que tenes definido
- un total, que iniciamos en 0

Iniciamos los valores en 0 porque si los dejamos "undefined" pueden traernos complicaciones despues en los calculos. 

 Cada vez que el usuario hace click en un checkbox o radio, ejecutamos la misma funcion: calcularTotal. Esa funcion se fija en el radio de "tarjeta de credito". Esta chequeado? Si es asi, calcula el 10% del subtotal y lo adjudica a la variable "recargo por tarjeta". Luego se fija en el checkbox de "envio". Esta marcado? Si es asi, adjudica el valor del envio a la variable "recargo por envio". Hace lo mismo con el descuento. Solo una vez que haya terminado las operaciones, podemos calcular el total, que es:
 total = subtotal + descuento + recargoPorEnvio + recargoPorTarjeta

 Si el usuario *no* marcó envio, por ejemplo, no hay problema, porque nuestra variable recargoPorEnvio queda en 0. 
 Obviamente estas variables te van a servir tambien para ir mostrandole al usuario en el checkout cuanto tiene que pagar por cada cosa. 

 Avisame si esto te sirve para encarar ese codigo, y si no me escribis y lo vemos juntas. 


### Misc 

Tu HTML esta muy bien, prolijo, claro y ordenado. Falta un favicon. Tu CSS esta muy prolijo y bien hecho tambien: se nota mucho el esfuerzo puesto en que quede bien. Tu JS tambien es prolijo, sin comentarios que confundan o console.log olvidados. 

Punto importante a remarcar es que tenes una carpeta "Imagenes" en mayuscula: la convencion en Javascript es que todas las carpetas inicien en minuscula, ya que las mayusculas pueden complicar el deployado o confundir a los compañeros de trabajo. 

Con respecto al aspecto visual de tu web, donde no esta perfecto, se nota que fue el tiempo lo que faltó. En donde se nota que tuviste tiempo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. Con respecto a las observaciones aqui, creo que tenes que trabajar un poco mas en seguir los modelos mas de cerca. Los tamaños de algunas cosas y su distancia relativa no estan bien; el contenido de tus tarjetas y formularios esta algo "pegoteado" entre si, o la barra sobre los productos esta muy grande. Falto un poquito de atencion a esos detalles que hacen realmente mucha diferencia cuando evaluamos la maqueta de un desarrollador. 

### Nota 

Veo relativamente pocos problemas en tu TP, pero muchas ausencias. Me cuesta evaluar realmente tu Javascript porque hay poco que hayas escrito vos por fuera de lo que vimos en clase. Tu codigo es prolijo y correcto, y con atencion al detalle, lo que habla de tu capacidad, pero habria preferido ver un poco mas de tu codigo. Si esto vuelve a ocurrir, lo cual es logico porque son trabajos largos y el tiempo no ayuda, preferiria que me dejaras en el codigo comentado los intentos que no salieron: eso me da mucha informacion sobre como encaraste un problema, que tan en claros tenes los conceptos y como manejas JS. No es lo mismo un codigo comentado donde algo no funciona por un parentesis mal puesto, que un codigo que no funciona porque un concepto basico no esta bien aplicado. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✔️ Respeta el diseño dado.
❌ Respeta el funcionamiento --> por los puntos faltantes
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅  Funciones pequeñas.
✅ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 7


