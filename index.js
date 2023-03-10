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