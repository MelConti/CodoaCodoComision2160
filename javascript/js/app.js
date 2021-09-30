alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola!');
/*Variables*/
/*palabras reservada nombre de la variable */
var nombre_variable;
/*palabras reservada nombre de la variable = asignamos el valor */
let otra_variable = "Hola"; /*tipo string*/
const PI = 3.1416; /*tipo enteros y float*/
let num2=18;
let hayClases=true; /* tipo boolean*/
let terminoLaClase=false;
/*Tipos,undefined, numero, String Boolean,Objeto, arreglo, chart, función*/
console.log(PI*num2);
console.log(num2 + 36 +  " " +otra_variable)/*sumar y concatenar*/
/*Condicionales*/
hayClases=false;
if(hayClases == true && terminoLaClase != true){
    console.log('Nos conectamos a la veideollamada!')
}else{
    console.log('Salimos a celebrar el día del Estudiante!')
}
if(hayClases == false || terminoLaClase == true){
    console.log('Salimos a celebrar el día del Estudiante!');
}

let elemento = document.getElementById("principal");
// console.log(elemento)
elemento.innerHTML="MI valor para innerHTML"
elemento.innerHTML+='<p>' + otra_variable + '</p>';
document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>")
document.write("<h3>Cómo están?</h3>")

if(nombre_variable == undefined){
    elemento.innerHTML+="Estamos con una variable sin valor definido!"
    elemento.innerHTML+="<p>Luis Navas</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elias</p>"
    elemento.style.backgroundColor="Blue"
    elemento.style.color="white"
}

// let mensaje = prompt("Introduce tu mensaje: ")
// elemento.innerHTML+="<h3>" + mensaje + "</h3>";
// elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">A simple success alert—check it out!</div>;

// let menu = prompt("seleccione el pedido: \n 1. Milanesa con fritas \n 2. Milanesas napolitana \n 3. Frita sola")
// menu= '2'
// if(menu === '1'){/* valor y el tipo */
//     elemento.innerHTML=elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">A simple success alert—check it out!</div>";
// }else if(menu === '2'){/* valor y el tipo */
//     elemento.innerHTML=elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">A simple success alert—check it out!</div>";
// }else if (menu === '3'){/* valor y el tipo */
//     elemento.innerHTML=elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">A simple success alert—check it out!</div>";
// }else{
//     alert('debe elegir opcion valida');
//     let menu = prompt("seleccione el pedido: \n 1. Milanesa con fritas \n 2. Milanesas napolitana \n 3. Frita sola")
// }

// switch (menu) {
//     case '1':
//         elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">A simple success alert—check it out!</div>";
//         break;

//     default:
//         elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">Debe elegir una opcion correcta</div>"
//         break;
// }

let num =0, num3=0;
num = Number(prompt("Ingresa el primer numero"));
num3 = Number(prompt("Ingresa el segundo numero"));

let resultado ="El resultado de la suma de "+num+" y "+num3+" es: "+ (num +num3);






