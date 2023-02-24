/** Simular con arrays una base de datos de pacientes en nutreteams y CARRITO DE COMPRAS **/



//Arrays vacio para luego rellenar
//Puedo ir agregando valores a un array después de declararlo.

/*let pacientes = [];
let arrayCarrito = [];*/



//1) crear las clases

class Paciente {
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
        
}

class producto {
    constructor(nombreProd, tipoProd, precio) {
        this.nombreProd = nombreProd;
        this.tipoProd = tipoProd;
        this.precio = precio;
    }
}


//Ahora creamos ingreso de clientes/pacientes

const pacienteUno = new Paciente("Juan Perez", 42, 12345678);
const pacienteDos = new Paciente("Pepe Sanchez", 35, 87654321);
const pacienteTres = new Paciente("Soledad Moreno", 30, 11111111);
const pacienteCuatro = new Paciente("Maria Garcia", 65, 22222222);
const pacienteCinco = new Paciente("Rodolfo Carrizo", 29, 33333333);

const arrayPacientes = [pacienteUno, pacienteDos, pacienteTres, pacienteCuatro, pacienteCinco];

console.log("Pacientes:");
console.log(arrayPacientes);


//Ahora creamos ingreso de Productos

const productoUno = new producto("Regimen personalizado", "Servicio", 1500);
const productoDos = new producto("Creatina", "Suplemento Nutricional", 4000);
const productoTres = new producto("Proteina", "Suplemento Nutricional", 5500);
const productoCuatro = new producto("BCCA", "Suplemento Nutricional", 4500);
const productoCinco = new producto("Quemador de Grasa", "Suplemento Nutricional", 6800);
const productoSeis = new producto("Formulas Nutricionales", "Productos Nutroterapeuticos", 5000);
const productoSiete = new producto("Multivitaminicos", "Formula Nutricional", 3600);

const arrayProductos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete];

//ForEach:

console.log("Pacientes Registrados:");

arrayPacientes.forEach( Paciente => {
    console.log(Paciente.nombre);
    console.log(Paciente.dni);
})

console.log("Metodo Some");


const pxExiste = arrayPacientes.some( Paciente => Paciente.dni)
    console.log("El Paciente Esta Ingresado: " + pxExiste);


//Buscador
//Find (retorna el 1er elemento del array)
const buscador = arrayPacientes.find( paciente => paciente);

console.log("Buscador: ");
console.log(buscador);

const arrayVentas = []



//Creamos Las funciones:

function menu() {
    alert("Bienvenido a Nutreteams");
    let opcion = parseInt(prompt("Ingrese una opcion: \n 1)Alta de Paciente \n 2)Baja de Paciente \n 3)Modificacion de Datos  \n 4)Buscador de Paciente \n 5)Salir"));
    return opcion;
}


//Opcion para Alta de Pacientes

function altaPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente");
    let edad = parseInt (prompt("Ingrese la edad del paciente"));
    let dni = parseInt (prompt("Ingrese dni del Paciente"));
    let paciente = new Paciente(nombre, edad, dni);
    arrayPacientes.push(paciente);
    console.log(arrayPacientes)
}

//Opcion para Baja de Pacientes

function bajaPaciente(){
    let dni = parseInt(prompt("Ingrese el dni del Paciente: "));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    let indice = arrayPacientes.indexOf(paciente);
    arrayPacientes.splice(indice,1);
    console.log(arrayPacientes);
}

//Opcion para Modificaciones de datos de Pacientes

function modificacionPaciente() {
    let dni = parseInt(prompt("Ingrese el dni del Paciente: "));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    let indice = arrayPacientes.indexOf(paciente);

    let nombre = prompt("Ingrese el nombre del paciente");
    let edad = parseInt (prompt("Ingrese la edad del paciente"));
    let pacienteModificado = new Paciente(nombre, edad, dni);
    arrayPacientes.splice(indice, 1, pacienteModificado)
    console.log(arrayPacientes);
}

//Opcion para Consulta de pacientes

function consultaPaciente() {
    let dni = parseInt (prompt("Ingrese dni del Paciente"));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    console.log(paciente);
}

////Opcion para Salir

function salir() {
    alert("Gracias por utilizar Nutreteams");
}

//Para la ejecucion de Sistema

let opcion = menu();

switch(opcion) {
    case 1:
        altaPaciente();
        break;
    case 2:
        bajaPaciente();
    break;
    case 3:
        modificacionPaciente();
        break;
    case 4:
        consultaPaciente();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opcion invalida");

}


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


