$(document).ready(function() {
    $('#calculadora').on('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario

        var numUno = parseFloat($('#num_uno').val());
        var numDos = parseFloat($('#num_dos').val());
        var operacion = $('#miComboBox').val();
        var resultado;

        if (isNaN(numUno) || isNaN(numDos)) {
            alert("Por favor ingrese ambos números.");
            return;
        }

        switch (operacion) {
            case 'suma':
                resultado = numUno + numDos;
                break;
            case 'resta':
                resultado = numUno - numDos;
                break;
            case 'multiplicacion':
                resultado = numUno * numDos;
                break;
            case 'division':
                if (numDos === 0) {
                    alert("No se puede dividir por cero.");
                    return;
                }
                resultado = numUno / numDos;
                break;
            default:
                alert("Seleccione una operación válida.");
                return;
        }

        $('#resultado').val(resultado);
    });
});
