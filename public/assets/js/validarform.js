const validarForm = () => {
    let documento = document.querySelector('#documento').value
    let nombre = document.querySelector('#Nombre').value
    let email = document.querySelector('#Correo').value
    let rol = document.querySelector('#Rol').value
    let permiso = document.querySelector('#Permisos').value
    let contrasena = document.querySelector('#Contra').value


    if (documento =="" || nombre =="" || email =="" || rol =="" || permiso =="" || contrasena =="" ) {
        Swal.fire(
            'ey!',
            'llena todos los tados mag!',
            'porfavor'
          )
    }else{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
    }


}   

const buttonBut = document.querySelector('#boton')
buttonBut.addEventListener('click',validarForm)