const productosValidar = () =>{
    let nombre = document.querySelector('#nombreProducto').value
    let descripcion = document.querySelector('#desc').value
    let estado = document.querySelector('#estado').value

    if (nombre =="" || descripcion =="" || estado =="") {
        alert('Diligencie todos los datos')
    }else{
        alert('Producto creado correctamente')
    }
}

const botonValidar = document.querySelector('#boton')
botonValidar.addEventListener('click',productosValidar)