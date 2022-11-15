const registros = [
    {
        correo: 'nia@gmail.com',
        contrasena: '123'
    },

    {
        correo: 'juan@gmail.com',
        contrasena: '321'
    },

    {
        correo: 'dani@gmail.com',
        contrasena: '222'
    },
    {
        correo: 'tomo@gmail.com',
        contrasena: 'tomisgamer777'
    }
]

const getUsuarios = () =>{
    let nombreU = document.querySelector('#correo').value
    let pass = document.querySelector('#pass').value
    return new Promise( (resolve, reject) =>{
        let existente = false
        registros.forEach(registro => {
            if(registro.correo == nombreU && registro.contrasena == pass){
                existente = true
            }
        })
        if(existente == true){
            window.location='inicio'
        }else{
            reject(alert('Usuario no encontrado'))
        }
    })
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getUsuarios)