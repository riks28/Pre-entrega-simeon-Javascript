


//Mensaje de Bienvenida al Paciente
alert("Bienvenido a su calculador de Indice de Masa Corporal");

//Se le solicita que ingrese su clave personal

/*const passwordAutorizado = 1234; 

for(let i = 0; i < 3; i++) {
    let passwordIngresado = parseInt(prompt("Ingrese su Contraseña:"));

    if(passwordIngresado === passwordAutorizado) {
        alert("Bienvenido a Nutreteams")
        console.log("Bienvenido a Nutreteams ");
        break;
    } 
}*/



//Se le solicita al Paciente (Px) que ingrese su peso y altura para calcular su Indice de Masa Corporal

let peso = parseFloat(prompt("Ingrese su Peso en Kg: "));
let altura = parseFloat(prompt("Ingrese su Altura en mts: "));

let calcIMC = calcularIMC(peso, altura).toFixed(2);

//Muestra por pantalla y por consola el un mensaje con el Indice de Masa Corporal del paciente
alert("      ------------------------      Su IMC es: " + calcIMC + "     -------------------------");
console.log("Su  IMC es: " + calcIMC);


//Respuesta en la Condicional de acuerdo a su Indice de Masa Corporal

if (calcIMC < 18.5){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Bajo Peso");
}else if (calcIMC >= 18.5 && calcIMC <=24.9){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Normal")
}else if (calcIMC >= 25 && calcIMC <=29.9){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Sobre Peso")
}else if (calcIMC >= 30 && calcIMC <=34.9){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Obesidad Grado I")
}else if (calcIMC >= 35 && calcIMC <=39.9){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Obesidad Grado II")
}else if (calcIMC >= 40){
    alert ("---- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ----                              Su IMC es: Obesidad Grado III")
}else {
    alert("Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨")
}

//Funcion para calcular el indice de Masa Corporal
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}   


