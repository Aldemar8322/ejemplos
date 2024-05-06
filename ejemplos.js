"use strict"
const d = document;
d.addEventListener("DOMContentLoaded", ()=>{
    manejarEjercicio1();
})
function manejarEjercicio1 () {
    const $resultado =d.getElementById ("resultado")
    const $form1 =d.getElementById ("form1")
    $form1.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const numero1= +$form1.numero1.value;
    const numero2= +$form1.numero2.value;
    if (numero1===numero2) {
        $resultado.textContent=`${numero1} es igual a ${numero2}`;
    } else if (numero1>numero2){
        $resultado.textContent=`${numero1} es mayor a ${numero2}`;
    } else {
        $resultado.textContent=`${numero1} es menor a ${numero2}`;
    }
    console.log(numero1);
    console.log(numero2);
})
}