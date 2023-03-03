

let imc = document.getElementById("imc");
let resultado = document.getElementById("resultado");
let resetImc = document.getElementById("resetImc");
    resetImc.addEventListener("click", clickResetImc);
let calcularImc = document.getElementById("calcularImc");
    calcularImc.addEventListener("click", clickCalcularImc);

function clickCalcularImc() {
    let kg = document.getElementById("peso").value;
    let mts = document.getElementById("altura").value;
    let imc = (kg / (mts * mts));

    IMC.innerHTML = imc

    if(kg == "" || mts == ""){
        alert("Debes ingresar los datos");
        IMC.innerHTML = "";
        return;
    }

    if (imc < 18.5) { imc.innerHTML = "Su IMC es Bajo de Peso"}
    else if (imc >= 18.5 && imc <=24.9) { imc.innerHTML = "Su IMC es Normal"}
    else if (imc >= 25 && imc <=29.9) { imc.innerHTML = "Su IMC es Sobre de Peso"}
    else if (imc >= 30 && imc <=34.9) { imc.innerHTML = "Su IMC es Obesidad Grado I"}
    else if (imc >= 35 && imc <=39.9) { imc.innerHTML = "Su IMC es Obesidad Grado II"}
    else if (imc >= 40) { imc.innerHTML = "Su IMC es Obesidad Grado III"}
}

function clickResetImc(){
    IMC.innerHTML = "";
    imc.innerHTML = "";

}

