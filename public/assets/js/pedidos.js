
const pedidosV = () =>{
    let documento = document.querySelector('#documento').value
    let nombre = document.querySelector('#cliente').value 
    let producto = document.querySelector('#producto').value 
    let direccion = document.querySelector('#direccion').value 

    if (documento =="" || nombre=="" || producto=="" || direccion=="") {
        alert('Diligencie todos los datos del formulario')
    }else{
        alert('Pedido creado correctamente')
    }
}

const botonV = document.querySelector('#boton')
botonV.addEventListener('click',pedidosV)