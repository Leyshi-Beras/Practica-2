function agregar(valor) {
    document.Calculadora.pantalla.value += valor;
}

function calcular() {
    try {
        document.Calculadora.pantalla.value = eval(document.Calculadora.pantalla.value);
    } catch (e) {
        document.Calculadora.pantalla.value = "Error";
    }
}

