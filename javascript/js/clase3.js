/*Funciones */
function calcular(){

    let num = Number(prompt("ingrese el primer numero"));
    let num2 = Number(prompt("ingrese el segundo numero"));

    let elemento = document.getElementById("principal");
    let resultado = num + num2;
    elemento.innerHTML+="<p> El rultado de la sumna de "+num+" y "+num2+" es: "+resultado+"</p>";
}

















