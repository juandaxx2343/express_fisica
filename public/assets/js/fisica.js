let masa = document.querySelector('#objeto');



let gravedadTierra = document.querySelector('#tierra') //9.8 * masa.value
let gravedadMarte = document.querySelector('#marte') //3.7 * masa.value
let gravedadLuna = document.querySelector('#luna') //1.6 * masa.value

const fisicaPeso = () => {
    let tierra = 9.8 * masa.value
    let marte = 3.7 * masa.value
    let luna = 1.6 * masa.value
    
   const re = /[0-9]/;
   const ok = re.exec(masa.value)
   if(masa.value == "" || !ok) {
    alert("todo correcto pri")
   }
   


}   

const buttonBut = document.querySelector('#calcular')
buttonBut.addEventListener('click',fisicaPeso)