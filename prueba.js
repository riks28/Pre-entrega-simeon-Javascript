/*//Mensaje de Bienvenida al Paciente
alert("Bienvenido a su calculador de Indice de Masa Corporal");

//Se le solicita que ingrese usuario y clave personal
const usuarioAutorizado = 1;
const passwordAutorizado = 1234; 

for(let i = 0; i < 3; i++) {
    let usuarioIngresado = parseInt(prompt("Ingrese su Usuario"));

    if(usuarioIngresado === usuarioAutorizado)
    alert("Ahora ingrese su Contraseña");
    
    let passwordIngresado = parseInt(prompt("Ingrese su Contraseña:"));

    if(passwordIngresado === passwordAutorizado) {
        alert("Bienvenido a Nutreteams")
        console.log("Bienvenido a Nutreteams ");
        break;
    } 
}
----------------------------------------------------------------
*/



/*
//Se le solicita al Paciente (Px) que ingrese su peso y altura para calcular su Indice de Masa Corporal

let peso = parseFloat(prompt("Ingrese su Peso en Kg: "));
let altura = parseFloat(prompt("Ingrese su Altura en mts: "));

let calcIMC = calcularIMC(peso, altura).toFixed(2);

//Muestra por pantalla y por consola el un mensaje con el Indice de Masa Corporal del paciente
alert("      ------------------------      Su IMC es: " + calcIMC + "     -------------------------");
console.log("Su  IMC es: " + calcIMC);


//Respuesta en la Condicional de acuerdo a su Indice de Masa Corporal

if (calcIMC < 18.5){
alert ("\n- Su IMC es: Bajo Peso    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else if (calcIMC >= 18.5 && calcIMC <=24.9){
    alert ("\n- Su IMC es: Normal    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else if (calcIMC >= 25 && calcIMC <=29.9){
    alert ("\n- Su IMC es: Sobre Peso    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else if (calcIMC >= 30 && calcIMC <=34.9){
    alert ("\n- Su IMC es: Obesidad Grado I    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else if (calcIMC >= 35 && calcIMC <=39.9){
    alert ("\n- Su IMC es: Obesidad Grado II    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else if (calcIMC >= 40){
    alert ("\n- Su IMC es: Obesidad Grado III    \n- Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨ ")
}else {
    alert("Por consultas puede hacerlo a traves de la pestaña ¨Contacto¨")
}*/
/*
//Funcion para calcular el indice de Masa Corporal
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}   
----------------------------------------------------------------

*/






// Variables para el cálculo del índice de masa corporal (IMC)
/*
let peso = 0;
let altura = 0;
let imc = 0;

// Función para calcular el IMC
function calcularIMC() {
    peso = document.getElementById("inputPeso").value;
    altura = document.getElementById("inputAltura").value;

    // Convertir la altura a metros
    altura = altura / 100;

    // Calcular el IMC
    imc = peso / (altura * altura);

    // Mostrar el resultado en la página web
    document.getElementById("resultadoIMC").innerHTML = "Su índice de masa corporal es: " + imc.toFixed(2);
}

// Función para validar el formulario de registro
function validarRegistro() {
    let nombre = document.getElementById("inputNombre").value;
    let correo = document.getElementById("inputCorreo").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || correo === "") {
        alert("Por favor complete todos los campos del formulario.");
        return false;
    }

    // Validar que el correo tenga un formato válido
    let expresionCorreo = /\S+@\S+\.\S+/;
    if (!expresionCorreo.test(correo)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
    }

    // Si todo está correcto, enviar el formulario
    alert("Gracias por registrarse.");
    return true;
}*/

function contactoPx() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    console.log(nombre + "" + apellido + "" + telefono + "" + correo);
}



formulario.addEventListener("enviar", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");


}


const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const telefonoValue = telefono.value.trim();
    const correoValue = correo.value.trim();


    if (nombreValue === "") {
        setError(nombre, "Debe ingresar el nombre");
    } else {
        setSuccess(nombre);
    }

    if (apellidoValue === "") {
        setError(apellido, "Debe ingresar el apellido");
    } else {
        setSuccess(apellido);
    }

    if (telefonoValue === "") {
        setError(telefono, "Debe ingresar el telefono");
    } else {
        setSuccess(telefono);
    }

    if (correoValue === "") {
        setError(correo, "Debe ingresar el correo");
    } else {
        setSuccess(correo);
    }
}