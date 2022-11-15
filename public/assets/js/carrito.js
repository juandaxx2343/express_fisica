const validarCarrito = () =>{
    let fechaEntrega = document.querySelector('#fechaEntrega').value
    let municipio = document.querySelector('#municipio').value 
    let productos = document.querySelector('#productos').value 
    let cantidad = document.querySelector('#cantidad').value 

    if (fechaEntrega == "" || municipio == "" || productos == "" || cantidad == "") {
        alert('Por favor llene todos los campos obligatorios, es decir, los que están marcados con un *')
    }else{
        alert('Producto añadido al carrito.')
    }
}

const botonVCarrito = document.querySelector('#botonCarrito')
botonVCarrito.addEventListener('click',validarCarrito)