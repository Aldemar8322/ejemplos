"use strict"
const d = document;
d.addEventListener("DOMContentLoaded", ()=>{
    manejarEjercicio1();
    manejarEjercicio3();
    manejarEjercicio4();
})
/*Hacer un programa que reciba del usuario dos numeros y muestre cual es el numero mayor y el numero menor*/
function manejarEjercicio1 () {
// d.getElementById se utiliza para llamar esa elemento desde el HTML
// Tener signo de pesos se usa para identificar que se llama un elemento desde el HTML
    const $resultado =d.getElementById ("resultado")
    const $form1 =d.getElementById ("form1")
// Me dice cuando el usuario oprime el boton submit
    $form1.addEventListener("submit", (evento)=>{
//PREVENTDEFAULT evita que se refresque la pagina al darle submit      
    evento.preventDefault()
// Con el mas antes del signo $ se pasa el string a numero
    const numero1= +$form1.numero1.value;
    const numero2= +$form1.numero2.value;
    if (numero1===numero2) {
// .textcontent se usa para ingresar parrafo que se muestre al usuario
        $resultado.textContent=`${numero1} es igual a ${numero2}`;
    } else if (numero1>numero2){
        $resultado.textContent=`${numero1} es mayor a ${numero2}`;
    } else {
        $resultado.textContent=`${numero1} es menor a ${numero2}`;
    }
// RESET se utiliza para limpiar el formulario automaticamente
    $form1.reset ();
})
}

function manejarEjercicio3 () {
    const dias = [
        "domingo",
        "lunes",
        "Martes",
        "Miercol es",
        "Jueves",
        "Sabado",
    ]
    const $form2 = d.getElementById ("form2");
    $form2.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        const $dia= parseInt ($form2.dia.value);
        if ($dia>= 0 && $dia <=6) {
            const $diaSeleccionado = d.getElementById ("diaSeleccionado");
            $diaSeleccionado.textContent = `El dia seleccionado es : ${dias [$dia]}`;
        }
    })
}
// Piedra-papel-tijera
function manejarEjercicio4 () {
    const opciones = [
        "piedra",
        "papel",
        "tijera",
    ];
    const indice = Math.floor(Math.random() * opciones.length);
    const seleccionMaquina = opciones[indice];
    console.log("seleccionMaquina: ", seleccionMaquina);
    const opcionesUsuario = d.querySelectorAll (".ppt");
    opcionesUsuario.forEach ((opcion)=>{
        opcion.addEventListener("click",()=>{
            const seleccionUsuario = opcion.textContent
            console.log("seleccionUsuario: ", seleccionUsuario);
        })
    })
}

