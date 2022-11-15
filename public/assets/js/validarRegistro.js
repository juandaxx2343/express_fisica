const validar = () =>{
let nombre = document.querySelector('#nombre').value
let correo = document.querySelector('#correo').value
let contrasena = document.querySelector('#contrasena').value
let confirmarContrasena = document.querySelector('#confirmarContrasena').value

if(nombre == "" || correo == "" || contrasena == ""){
    alert('Complete todos los campos del formulario!')
}

if(contrasena != confirmarContrasena){
    alert('Las contraseñas no coinciden!')
}else{
    alert('Registrado exitosamente!')
}


}

const boton = document.querySelector('#botonRegistrar')
boton.addEventListener('click', validar)